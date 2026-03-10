import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { OrderContext } from '../context/OrderContext';
import OrderCard from '../components/OrderCard';

export default function WaiterOrdersScreen() {
  const { orders, assignOrderToWaiter } = useContext(OrderContext);
  const pending = orders.filter(o => o.status === 'pending');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending orders</Text>
      <FlatList
        data={pending}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <OrderCard order={item} />
            <Button
              title="Accept"
              onPress={() => assignOrderToWaiter(item.id, 'waiter1')}
            />
          </View>
        )}
        ListEmptyComponent={<Text>No pending orders.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
