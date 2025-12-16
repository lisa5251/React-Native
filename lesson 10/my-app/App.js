// App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import ListScreen from "./screens/ListScreen";
import StudentScreen from "./screens/StudentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BoxScreen from "./screens/BoxScreen";
import UsersScreen from "./screens/UsersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UsersScreen />
      <StatusBar style="auto" />
    </>
  );
}
