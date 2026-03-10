import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderCard({ order }) {
  if (!order) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Order #{order.id}</Text>
      <Text>Table: {order.tableNumber}</Text>
      <Text>Status: {order.status}</Text>
      <Text>Total: ${order.totalPrice.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  heading: { fontWeight: 'bold', marginBottom: 5 },
});
