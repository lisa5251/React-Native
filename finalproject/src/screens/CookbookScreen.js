import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { RecipesContext } from '../context/RecipesContext';

export default function CookbookScreen({ navigation }) {
  const { favorites } = useContext(RecipesContext);
  const [search, setSearch] = React.useState('');

  const filtered = favorites.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.urlInput}
          placeholder="Paste recipe URL (TODO)"
          value={''}
          editable={false}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search favorites..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {filtered.length === 0 ? (
        <Text style={styles.empty}>
          {favorites.length === 0
            ? 'No favorites yet. Add some recipes by tapping the heart icon!'
            : 'No matching recipes.'}
        </Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => navigation.navigate('Details', { recipe: item })}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
  },
  empty: { marginTop: 50, textAlign: 'center', color: '#888', padding: 20 },
  list: { padding: 10 },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  urlInput: {
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: '#888',
  },
});