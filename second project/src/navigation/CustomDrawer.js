import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="shopping" size={28} color="#fff" />
        </View>
        <Text style={styles.headerText}>TechHub</Text>
        <Text style={styles.headerSubtext}>Premium Devices</Text>
      </View>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialCommunityIcons name="logout" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  },
  header: {
    padding: 24,
    backgroundColor: "#00a8e8",
    alignItems: "center",
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12
  },
  headerText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 4
  },
  headerSubtext: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500"
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: "auto"
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#ff6b6b",
    borderRadius: 10,
    justifyContent: "center"
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});

export default CustomDrawer;