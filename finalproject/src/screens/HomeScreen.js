import React, { useState, useEffect, useContext, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import RecipeCard from '../components/RecipeCard';
import { getRecipes, RECIPE_CATEGORIES } from '../services/recipeService';
import { RecipesContext } from '../context/RecipesContext';
import { COLORS, SPACING, RADIUS } from '../theme';

const CATEGORY_CHIPS = RECIPE_CATEGORIES;

export default function HomeScreen({ navigation }) {
  const { recipes, setRecipes, favorites } = useContext(RecipesContext);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!recipes.length) return;
    recipes.forEach((recipe) => {
      if (recipe.image) {
        Image.prefetch(recipe.image).catch(() => undefined);
      }
    });
  }, [recipes]);

  const filtered = useMemo(() => {
    const bySearch = recipes.filter((r) =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );

    if (activeCategory === 'All') {
      return bySearch;
    }

    return bySearch.filter((r) => r.category === activeCategory);
  }, [recipes, search, activeCategory]);

  const sectionLabel = activeCategory === 'All' ? 'All Recipes' : activeCategory;

  const renderHeader = () => (
    <View>
      <LinearGradient colors={[COLORS.primary, COLORS.accent]} style={styles.hero}>
        <Text style={styles.heroTitle}>Recipe Finder</Text>
        <Text style={styles.heroSubtitle}>Let us find something delicious for you.</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{recipes.length}</Text>
            <Text style={styles.statLabel}>Recipes</Text>
          </View>
          <View style={[styles.statCard, styles.statCardSpacing]}>
            <Text style={styles.statValue}>{favorites.length}</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color={COLORS.muted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          placeholderTextColor={COLORS.muted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={CATEGORY_CHIPS}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
        keyExtractor={(item) => item}
        renderItem={({ item: chip }) => {
          const isActive = activeCategory === chip;
          return (
            <TouchableOpacity
              style={[styles.chip, isActive && styles.chipActive]}
              onPress={() => setActiveCategory(chip)}
              activeOpacity={0.85}
            >
              <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{chip}</Text>
            </TouchableOpacity>
          );
        }}
        nestedScrollEnabled
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{sectionLabel}</Text>
        <Text style={styles.sectionSubtitle}>{filtered.length} results</Text>
      </View>
    </View>
  );

  const renderRecipeItem = ({ item }) => (
    <RecipeCard
      recipe={item}
      onPress={() => navigation.navigate('Details', { recipe: item })}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 40 }} size="large" color={COLORS.primary} />
      ) : (
        Platform.OS !== 'web' ? (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id}
              renderItem={renderRecipeItem}
              ListHeaderComponent={renderHeader}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No recipes found. Try another search.</Text>
              }
              style={{ flex: 1 }}
              contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            />
          </KeyboardAvoidingView>
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={renderRecipeItem}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No recipes found. Try another search.</Text>
            }
            style={{ flex: 1 }}
            contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}
            showsVerticalScrollIndicator={false}
          />
        )
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 160,
  },
  hero: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.lg,
    borderBottomLeftRadius: RADIUS.lg,
    borderBottomRightRadius: RADIUS.lg,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  heroSubtitle: {
    marginTop: SPACING.xs,
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: SPACING.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: SPACING.md,
    borderRadius: RADIUS.md,
  },
  statCardSpacing: {
    marginLeft: SPACING.md,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    marginTop: SPACING.xs,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginTop: -SPACING.lg,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: SPACING.md,
    fontSize: 15,
    color: COLORS.text,
  },
  chipRow: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  chip: {
    backgroundColor: COLORS.surface,
    borderRadius: 999,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    fontSize: 12,
    color: COLORS.muted,
  },
  chipTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionHeader: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.muted,
  },
  emptyText: {
    marginTop: SPACING.lg,
    textAlign: 'center',
    color: COLORS.muted,
  },
});
