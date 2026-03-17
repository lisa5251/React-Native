import React, { createContext, useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        setFavorites([]);
        setPosts([]);
        return;
      }

      const favKey = `favorites:${user.id}`;
      const postKey = `posts:${user.id}`;

      const favRaw = await AsyncStorage.getItem(favKey);
      const postRaw = await AsyncStorage.getItem(postKey);

      setFavorites(favRaw ? JSON.parse(favRaw) : []);
      setPosts(postRaw ? JSON.parse(postRaw) : []);
    };

    loadUserData();
  }, [user]);

  const toggleFavorite = async (recipe) => {
    if (!user) return;
    const favKey = `favorites:${user.id}`;

    setFavorites((prev) => {
      const exists = prev.find((r) => r.id === recipe.id);
      let updated;
      if (exists) {
        updated = prev.filter((r) => r.id !== recipe.id);
      } else {
        updated = [...prev, recipe];
      }
      AsyncStorage.setItem(favKey, JSON.stringify(updated));
      return updated;
    });
  };

  const addPost = async ({ title, notes, rating, photoUrl }) => {
    if (!user) return;
    const postKey = `posts:${user.id}`;
    const newPost = {
      id: Date.now().toString(),
      title: title.trim(),
      notes: notes.trim(),
      rating,
      photoUrl: photoUrl.trim(),
      createdAt: new Date().toISOString(),
    };

    setPosts((prev) => {
      const updated = [newPost, ...prev];
      AsyncStorage.setItem(postKey, JSON.stringify(updated));
      return updated;
    });
  };

  const removePost = async (postId) => {
    if (!user) return;
    const postKey = `posts:${user.id}`;
    setPosts((prev) => {
      const updated = prev.filter((p) => p.id !== postId);
      AsyncStorage.setItem(postKey, JSON.stringify(updated));
      return updated;
    });
  };

  const value = { recipes, setRecipes, favorites, toggleFavorite, posts, addPost, removePost };
  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
