import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { OrderContext } from '../context/OrderContext';
import OrderCard from '../components/OrderCard';

export default function KitchenScreen() {
  const { orders, markAsReady } = useContext(OrderContext);
  const cooking = orders.filter(o => o.status === 'in-kitchen');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen – orders to prepare</Text>
      <FlatList
        data={cooking}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrderCard order={item} />
        )}
        ListEmptyComponent={<Text>No orders currently in kitchen.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});