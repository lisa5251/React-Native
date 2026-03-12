import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';


const RecipeCard = ({ recipe, onPress }) => {
  const { favorites, toggleFavorite } = useContext(RecipesContext);
  const isFav = favorites.some((r) => r.id === recipe.id);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {recipe.image && (
        <View>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            style={styles.gradientOverlay}
          />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(recipe)}
          >
            <Feather name={isFav ? 'heart' : 'heart'} size={24} color={isFav ? '#ff6b6b' : '#fff'} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 4,
    borderRadius: 16,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
});

export default RecipeCard;