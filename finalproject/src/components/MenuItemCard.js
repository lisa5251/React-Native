import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const MenuItemCard = ({ item, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <CustomButton
        title="Add to Cart"
        onPress={() => onAddToCart(item)}
        color="#2196F3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#4CAF50', marginVertical: 5 },
  description: { fontSize: 12, color: '#666' },
});

export default MenuItemCard;