export const authService = {
  loginWaiter: async (phoneId, password) => {
    // In real app, this calls your backend
    // For now, just validate
    if (password.length > 0) {
      return { success: true, waiter: { id: phoneId, name: 'Waiter ' + phoneId } };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  endShift: async (waiterId) => {
    // Mark waiter as offline
    console.log('Waiter', waiterId, 'shift ended');
    return { success: true };
  },

  takeBrake: async (waiterId) => {
    // Mark waiter as on break
    console.log('Waiter', waiterId, 'on break');
    return { success: true };
  }
};
