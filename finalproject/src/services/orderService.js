// simple stub service for orders and menu

export async function getMenu() {
  // In a real application you would fetch this data from an API
  // return fetch('/api/menu').then(res => res.json());

  // static sample menu
  return [
    { id: '1', name: 'Cheeseburger', price: 9.99, description: 'Beef patty, cheese, lettuce, tomato' },
    { id: '2', name: 'Veggie Pizza', price: 12.5, description: 'Cheese, tomato, vegetables' },
    { id: '3', name: 'Caesar Salad', price: 7.75, description: 'Romaine, croutons, Caesar dressing' },
    { id: '4', name: 'French Fries', price: 3.5, description: 'Crispy potato fries' },
  ];
}

export async function submitOrder(order) {
  // stub: in real use API to post
  console.log('submitOrder', order);
  return { success: true, orderId: Date.now().toString() };
}
