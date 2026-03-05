import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null, {id, name, role}
  const [role, setRole] = useState(null); // 'customer', 'waiter', 'kitchen', 'manager'

  const login = (userId, userName, userRole) => {
    setUser({ id: userId, name: userName });
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};