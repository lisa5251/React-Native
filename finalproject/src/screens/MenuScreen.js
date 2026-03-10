import React, { useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import MenuItemCard from '../components/MenuItemCard';
import { OrderContext } from '../context/OrderContext';
import { getMenu } from '../services/orderService';

export default function MenuScreen() {
  // pull menu and cart helpers from context
  const { menu, setMenu, addItemToCart } = useContext(OrderContext);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onAddToCart={() => addItemToCart(item)} />
        )}
      />
    </View>
  );
}