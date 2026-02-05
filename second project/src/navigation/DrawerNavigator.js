import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator, ProfileStackNavigator, SettingsStackNavigator } from "./StackNavigator";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen 
                name="Home" 
                component={BottomTabNavigator} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="About" 
                component={AboutStackNavigator} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Profile" 
                component={ProfileStackNavigator} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingsStackNavigator} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
    );
}
export default DrawerNavigator;