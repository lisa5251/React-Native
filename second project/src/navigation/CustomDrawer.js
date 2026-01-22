import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App Drawer</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialCommunityIcons name="logout" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#FF6347",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: "red",
  },
});

export default CustomDrawer;