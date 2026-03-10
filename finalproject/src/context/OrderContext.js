import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      tableNumber: 3,
      items: [{ name: 'Cheeseburger', price: 9.99 }],
      status: 'pending',
      assignedWaiter: null,
      totalPrice: 9.99,
    },
  ]);
  // Example order structure above shows the fields used by the app

  // menu and cart for customer-facing screens
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  const addItemToCart = item => setCart(c => [...c, item]);
  const clearCart = () => setCart([]);

  const createOrder = (tableNumber, items) => {
    const newOrder = {
      id: Date.now().toString(),
      tableNumber,
      items,
      status: 'pending',
      assignedWaiter: null,
      totalPrice: items.reduce((sum, item) => sum + item.price, 0),
      createdAt: new Date(),
    };
    setOrders([...orders, newOrder]);
    return newOrder;
  };

  const assignOrderToWaiter = (orderId, waiterId) => {
    setOrders(orders.map(order =>
      order.id === orderId 
        ? { ...order, status: 'accepted', assignedWaiter: waiterId }
        : order
    ));
  };

  const sendToKitchen = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId 
        ? { ...order, status: 'in-kitchen' }
        : order
    ));
  };

  const markAsReady = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId 
        ? { ...order, status: 'ready' }
        : order
    ));
  };

  const markAsServed = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId 
        ? { ...order, status: 'served' }
        : order
    ));
  };

  return (
    <OrderContext.Provider value={{
      orders,
      createOrder,
      assignOrderToWaiter,
      sendToKitchen,
      markAsReady,
      markAsServed,
      // customer/menu helpers
      menu,
      setMenu,
      cart,
      addItemToCart,
      clearCart,
    }}>
      {children}
    </OrderContext.Provider>
  );
};