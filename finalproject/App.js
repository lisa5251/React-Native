import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OrderProvider } from './src/context/OrderContext';
import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import WaiterOrdersScreen from './src/screens/WaiterOrdersScreen';
import KitchenScreen from './src/screens/KitchenScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <OrderProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Waiter" component={WaiterOrdersScreen} />
          <Stack.Screen name="Kitchen" component={KitchenScreen} />
          {/* additional screens (Cart, Status, Shift, etc.) can be added later */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </OrderProvider>
  );
}
