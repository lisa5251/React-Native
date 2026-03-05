export const orderService = {
  getOrdersForWaiter: async (waiterId) => {
    // Get pending orders that need a waiter
    // In real app: fetch from backend
    return [];
  },

  checkKitchenOrders: async () => {
    // Get orders that need cooking
    return [];
  },

  notifyWaiterOrderReady: async (waiterId, orderId) => {
    // Send notification/alert to waiter
    console.log('Order ready alert for waiter', waiterId);
  }
};
