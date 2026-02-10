import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MainStackNavigator, AboutStackNavigator, ProfileStackNavigator, SettingsStackNavigator } from "./StackNavigator";
import AndroidStackNavigator from "./AndroidStackNavigator";
import IosStackNavigator from "./IosStackNavigator";
import LaptopStackNavigator from "./LaptopStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00a8e8",
        tabBarInactiveTintColor: "#999",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          paddingBottom: 8,
          paddingTop: 8,
          height: 60
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2
        },
      }}
    >
      <Tab.Screen
        name="Android"
        component={AndroidStackNavigator}
        options={{
          tabBarLabel: "Android",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="android"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="video-stabilization"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ios"
        component={IosStackNavigator}
        options={{
          tabBarLabel: "Ios",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="apple"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Laptop"
        component={LaptopStackNavigator}
        options={{
          tabBarLabel: "Laptop",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="laptop"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />
 
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog"
              color={color}
              size={size ?? 26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
