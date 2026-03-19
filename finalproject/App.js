import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import CookbookScreen from './src/screens/CookbookScreen';
import MyKitchenScreen from './src/screens/MyKitchenScreen';
import AuthScreen from './src/screens/AuthScreen';
import ProfileBadge from './src/components/ProfileBadge';
import { RecipesProvider } from './src/context/RecipesContext';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import { COLORS, RADIUS, SPACING } from './src/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
        headerRight: () => <ProfileBadge />,
        headerRightContainerStyle: { paddingRight: SPACING.md },
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

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'Cookbook') {
            iconName = 'book';
          } else if (route.name === 'MyKitchen') {
            iconName = 'camera';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 16,
          height: 64,
          borderRadius: RADIUS.lg,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          paddingBottom: 6,
          paddingTop: 6,
          ...(Platform.OS === 'web'
            ? { boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.12)' }
            : {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.12,
                shadowRadius: 12,
                elevation: 8,
              }),
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="Cookbook" component={CookbookScreen} />
      <Tab.Screen name="MyKitchen" component={MyKitchenScreen} options={{ title: 'My Kitchen' }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    );
  }

  return <MainTabs />;
}

export default function App() {
  return (
    <AuthProvider>
      <RecipesProvider>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar style="light" />
        </NavigationContainer>
      </RecipesProvider>
    </AuthProvider>
  );
}
