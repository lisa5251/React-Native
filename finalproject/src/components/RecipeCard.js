import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';
import RecipeIcon from './RecipeIcon';
import { COLORS, SPACING, RADIUS, SHADOW } from '../theme';

const RecipeCard = ({ recipe, onPress }) => {
  const { favorites, toggleFavorite } = useContext(RecipesContext);
  const isFav = favorites.some((r) => r.id === recipe.id);
  const ingredientCount = Array.isArray(recipe.ingredients) ? recipe.ingredients.length : 0;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.iconHeader}>
        <RecipeIcon title={recipe.title} size={56} />
        <TouchableOpacity
          style={[styles.favoriteButton, isFav && styles.favoriteButtonActive]}
          onPress={() => toggleFavorite(recipe)}
        >
          <Feather name="heart" size={18} color={isFav ? COLORS.primary : COLORS.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{recipe.title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{ingredientCount} ingredients</Text>
          <View style={styles.dot} />
          <Text style={styles.metaText}>Tap for steps</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    marginVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    ...SHADOW.card,
  },
  iconHeader: {
    height: 120,
    backgroundColor: COLORS.highlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 6,
    borderRadius: 16,
  },
  favoriteButtonActive: {
    backgroundColor: COLORS.highlight,
  },
  textContainer: {
    padding: SPACING.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  metaRow: {
    marginTop: SPACING.xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 12,
    color: COLORS.muted,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.muted,
    marginHorizontal: SPACING.sm,
  },
});

export default RecipeCard;
