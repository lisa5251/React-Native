import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ios from "../screens/Ios";

const Stack = createNativeStackNavigator();

const IosStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Ios" 
                component={Ios}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
}
export default IosStackNavigator;