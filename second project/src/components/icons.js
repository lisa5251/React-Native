import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = (props) => {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name={props.name} size={27} color="#00bcd4" />
            </View>
            <Text style={styles.iconText}>{props.iconText || ''}</Text>
        </View>
    );
}

const  styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: "#796bacff",
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 2,
    },
    iconContainer: {
        alignItems: "center",
        width: 80,
        height: 100,
        justifyContent: 'center'
    },
    iconText: {
        height: 20,
        marginTop: 6,
        fontWeight: "600",
        color: "#333",
        textAlign: 'center'
    }

}) ;
export default Icon;