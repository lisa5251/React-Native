import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ios from "../screens/Ios";
import Android from "../screens/Android";

const Stack = createNativeStackNavigator();

const AboutStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Android" 
                component={Android}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
};

export default AboutStackNavigator;