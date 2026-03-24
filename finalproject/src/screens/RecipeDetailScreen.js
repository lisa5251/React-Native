import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';
import RecipeIcon from '../components/RecipeIcon';
import { COLORS, SPACING, RADIUS, SHADOW } from '../theme';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;
  const { favorites, toggleFavorite } = useContext(RecipesContext);
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  const isFav = favorites.some((r) => r.id === recipe.id);
  const ingredientCount = Array.isArray(recipe.ingredients) ? recipe.ingredients.length : 0;
  const fallbackImage = recipe.fallbackImage;

  useEffect(() => {
    setImageError(false);
    setFallbackError(false);
  }, [recipe.image, recipe.fallbackImage]);

  const showPrimary = recipe.image && !imageError;
  const showFallback = !showPrimary && fallbackImage && !fallbackError;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={[styles.content, { flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
        >
          {showPrimary ? (
            <View style={styles.hero}>
              <Image
                source={{ uri: recipe.image, cache: 'reload' }}
                style={styles.topImage}
                onError={() => setImageError(true)}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.titleOverlay}
              >
                <Text style={styles.titleOnImage}>{recipe.title}</Text>
              </LinearGradient>
              <TouchableOpacity
                style={styles.detailFavorite}
                onPress={() => toggleFavorite(recipe)}
              >
                <Feather name="heart" size={20} color={isFav ? COLORS.primary : '#fff'} />
              </TouchableOpacity>
            </View>
          ) : showFallback ? (
            <View style={styles.hero}>
              <Image
                source={{ uri: fallbackImage, cache: 'reload' }}
                style={styles.topImage}
                onError={() => setFallbackError(true)}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.titleOverlay}
              >
                <Text style={styles.titleOnImage}>{recipe.title}</Text>
              </LinearGradient>
              <TouchableOpacity
                style={styles.detailFavorite}
                onPress={() => toggleFavorite(recipe)}
              >
                <Feather name="heart" size={20} color={isFav ? COLORS.primary : '#fff'} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.hero}>
              <LinearGradient colors={[COLORS.primary, COLORS.accent]} style={styles.heroGradient}>
                <RecipeIcon title={recipe.title} size={88} />
                <Text style={styles.heroTitle}>{recipe.title}</Text>
              </LinearGradient>
              <TouchableOpacity
                style={styles.detailFavorite}
                onPress={() => toggleFavorite(recipe)}
              >
                <Feather name="heart" size={20} color={isFav ? COLORS.primary : '#fff'} />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.infoRow}>
            <View style={styles.infoPill}>
              <Feather name="list" size={14} color={COLORS.muted} />
              <Text style={styles.infoText}>{ingredientCount} ingredients</Text>
            </View>
            <View style={styles.infoPill}>
              <Feather name="heart" size={14} color={isFav ? COLORS.primary : COLORS.muted} />
              <Text style={styles.infoText}>{isFav ? 'Saved' : 'Tap to save'}</Text>
            </View>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionHeader}>Ingredients</Text>
            {recipe.ingredients.map((ing, idx) => (
              <Text key={idx} style={styles.listItem}>{`- ${ing}`}</Text>
            ))}
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionHeader}>Instructions</Text>
            <Text style={styles.instructions}>{recipe.instructions}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
    paddingBottom: 140,
  },
  hero: {
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    marginBottom: SPACING.lg,
    ...SHADOW.card,
  },
  topImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  titleOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: SPACING.md,
  },
  titleOnImage: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  heroGradient: {
    paddingVertical: SPACING.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    marginTop: SPACING.sm,
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  infoPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 999,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    marginRight: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoText: {
    marginLeft: SPACING.xs,
    fontSize: 12,
    color: COLORS.muted,
  },
  sectionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOW.card,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: SPACING.sm,
    color: COLORS.text,
  },
  listItem: {
    fontSize: 15,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  instructions: {
    fontSize: 15,
    color: COLORS.text,
    lineHeight: 22,
  },
  detailFavorite: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 8,
    borderRadius: 18,
  },
});
