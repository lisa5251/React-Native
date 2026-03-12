import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;
  const { favorites, toggleFavorite } = useContext(RecipesContext);
  const isFav = favorites.some((r) => r.id === recipe.id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {recipe.image && (
        <View>
          <Image source={{ uri: recipe.image }} style={styles.topImage} />
          <LinearGradient
            colors={["transparent","rgba(0,0,0,0.7)"]}
            style={styles.titleOverlay}
          >
            <Text style={[styles.title, styles.titleOnImage]}>{recipe.title}</Text>
          </LinearGradient>
          <TouchableOpacity
            style={styles.detailFavorite}
            onPress={() => toggleFavorite(recipe)}
          >
            <Feather name="heart" size={28} color={isFav ? '#ff6b6b' : '#fff'} />
          </TouchableOpacity>
        </View>
      )}
      {!recipe.image && <Text style={styles.title}>{recipe.title}</Text>}
      <Text style={styles.sectionHeader}>Ingredients</Text>
      {recipe.ingredients.map((ing, idx) => (
        <Text key={idx} style={styles.listItem}>{`• ${ing}`}</Text>
      ))}
      <Text style={styles.sectionHeader}>Instructions</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  titleOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    alignItems: 'center',
  },
  titleOnImage: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 8,
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 4,
  },
  listItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  instructions: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginTop: 4,
  },
  detailFavorite: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 6,
    borderRadius: 20,
  },
});