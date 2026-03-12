import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { getRecipes } from '../services/recipeService';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';

export default function HomeScreen({ navigation }) {
  const { recipes, setRecipes, favorites, toggleFavorite } = useContext(RecipesContext);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/featured/?kitchen,pattern' }}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={{ uri: 'https://source.unsplash.com/featured/?food,background' }}
          style={styles.headerBackground}
          blurRadius={4}
        >
          <Text style={styles.headerTitle}>Recipe Finder</Text>
        </ImageBackground>

        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>Tap the heart to add to your cookbook!</Text>
        </View>

        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {loading ? (
          <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#ff6b6b" />
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecipeCard
                recipe={item}
                onPress={() => navigation.navigate('Details', { recipe: item })}
              />
            )
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No recipes found.</Text>
            }
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  infoBanner: {
    backgroundColor: '#fff8e1',
    padding: 8,
    alignItems: 'center',
  },
  infoText: {
    color: '#333',
    fontSize: 14,
  },
  headerBackground: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchIcon: {
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },
  listContent: {
    padding: 10,
  },
  emptyText: {
    marginTop: 50,
    textAlign: 'center',
    color: '#888',
  },
});