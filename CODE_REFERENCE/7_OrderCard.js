import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const OrderCard = ({ order, onAccept, onMarkReady, userRole }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Table #{order.tableNumber}</Text>
      <Text style={styles.id}>Order ID: {order.id}</Text>
      
      <Text style={styles.itemsTitle}>Items:</Text>
      {order.items.map((item, idx) => (
        <Text key={idx} style={styles.item}>• {item.name} - ${item.price}</Text>
      ))}
      
      <Text style={styles.status}>Status: {order.status}</Text>
      <Text style={styles.total}>Total: ${order.totalPrice}</Text>

      {/* Waiter buttons */}
      {userRole === 'waiter' && order.status === 'pending' && (
        <CustomButton
          title="Accept Order"
          onPress={() => onAccept(order.id)}
          color="#4CAF50"
        />
      )}

      {/* Kitchen buttons */}
      {userRole === 'kitchen' && order.status === 'in-kitchen' && (
        <CustomButton
          title="Food Ready!"
          onPress={() => onMarkReady(order.id)}
          color="#FF9800"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  id: { fontSize: 12, color: '#999', marginVertical: 5 },
  itemsTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  item: { fontSize: 13, color: '#333', marginLeft: 10 },
  status: { fontSize: 13, fontStyle: 'italic', marginTop: 10 },
  total: { fontSize: 14, fontWeight: 'bold', color: '#4CAF50', marginTop: 5 },
});

export default OrderCard;
