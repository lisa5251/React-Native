// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import ListScreen from "./screens/ListScreen";
import StudentScreen2 from "./screens/StudentScreen2";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Profile" screenOptions={{ title: "App" }}>
    //     <Stack.Screen name="Main" component={MainScreen} />
    //     <Stack.Screen name="List" component={ListScreen} />
    //     <Stack.Screen name="Students" component={StudentScreen} />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //   </Stack.Navigator>
    //   <StatusBar style="auto" />
    // </NavigationContainer>
    <StudentScreen2>s</StudentScreen2>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
