// App.js
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import MainScreen from "./screens/MainScreen";
// import ListScreen from "./screens/ListScreen";
// import StudentScreen from "./screens/StudentScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import BoxScreen from "./screens/BoxScreen";
// import PostsScreen from "./screens/PostsScreen";
import CountriesScreen from "./screens/CountriesScreen";
import Products from "./screens/Products";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Products />
    </>
  );
}
