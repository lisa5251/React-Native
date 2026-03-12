import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import CookbookScreen from './src/screens/CookbookScreen';
import { RecipesProvider } from './src/context/RecipesContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ff6b6b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Recipe Finder' }}
      />
      <Stack.Screen
        name="Details"
        component={RecipeDetailScreen}
        options={{ title: 'Recipe Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName = 'home';
              if (route.name === 'Cookbook') {
                iconName = 'book';
              }
              return <Feather name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ff6b6b',
          })}
        >
          <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
          <Tab.Screen name="Cookbook" component={CookbookScreen} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecipesProvider>
  );
}
