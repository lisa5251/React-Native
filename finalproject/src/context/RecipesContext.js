import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // load favorites from storage
  useEffect(() => {
    AsyncStorage.getItem('favorites').then((data) => {
      if (data) setFavorites(JSON.parse(data));
    });
  }, []);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.find((r) => r.id === recipe.id);
      let updated;
      if (exists) {
        updated = prev.filter((r) => r.id !== recipe.id);
      } else {
        updated = [...prev, recipe];
      }
      AsyncStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const value = { recipes, setRecipes, favorites, toggleFavorite };
  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
}