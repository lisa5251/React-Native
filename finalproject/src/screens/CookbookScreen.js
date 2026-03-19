import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RecipeCard from '../components/RecipeCard';
import { RecipesContext } from '../context/RecipesContext';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SPACING, RADIUS, SHADOW } from '../theme';

export default function CookbookScreen({ navigation }) {
  const { favorites } = useContext(RecipesContext);
  const { user } = useContext(AuthContext);
  const [search, setSearch] = React.useState('');

  const filtered = favorites.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>My Cookbook</Text>
        <Text style={styles.subtitle}>{favorites.length} saved recipes</Text>
      </View>

      <View style={styles.quickAddCard}>
        <View style={styles.quickAddIcon}>
          <Feather name="link" size={16} color={COLORS.primary} />
        </View>
        <View style={styles.quickAddContent}>
          <Text style={styles.quickAddTitle}>Add by URL</Text>
          <Text style={styles.quickAddText}>Coming soon. Paste a recipe link to save it.</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color={COLORS.muted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search favorites..."
          placeholderTextColor={COLORS.muted}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {renderHeader()}
          {filtered.length === 0 ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyTitle}>Nothing here yet</Text>
              <Text style={styles.emptyText}>
                {favorites.length === 0
                  ? `Save your first recipe by tapping the heart icon, ${user?.name || 'chef'}.`
                  : 'No matching recipes. Try a different search.'}
              </Text>
            </View>
          ) : (
            filtered.map((item) => (
              <RecipeCard
                key={item.id}
                recipe={item}
                onPress={() => navigation.navigate('Details', { recipe: item })}
              />
            ))
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  header: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: SPACING.xs,
    fontSize: 13,
    color: COLORS.muted,
  },
  quickAddCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
    ...SHADOW.card,
  },
  quickAddIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.highlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickAddContent: {
    marginLeft: SPACING.md,
    flex: 1,
  },
  quickAddTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },
  quickAddText: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: SPACING.xs,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
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
  emptyCard: {
    marginTop: SPACING.lg,
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOW.card,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  emptyText: {
    marginTop: SPACING.sm,
    fontSize: 13,
    color: COLORS.muted,
  },
});
