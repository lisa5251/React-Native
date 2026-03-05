import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  // Example order: {
  //   id: '1',
  //   tableNumber: 3,
  //   items: [{name: 'burger', price: 10}],
  //   status: 'pending', 'accepted', 'in-kitchen', 'ready', 'served'
  //   assignedWaiter: null,
  //   totalPrice: 10
  // }

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
      markAsServed
    }}>
      {children}
    </OrderContext.Provider>
  );
};
