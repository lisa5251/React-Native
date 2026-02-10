import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = (props) => {
    return (
        <TouchableOpacity style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name={props.name} size={32} color="#fff" />
            </View>
            <Text style={styles.iconText}>{props.iconText || ''}</Text>
        </TouchableOpacity>
    );
}

const  styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: "#00a8e8",
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
        boxShadow: '0px 4px 12px rgba(0, 168, 232, 0.3)',
        elevation: 5,
    },
    iconContainer: {
        alignItems: "center",
        width: 80,
        justifyContent: 'center'
    },
    iconText: {
        height: 20,
        marginTop: 10,
        fontWeight: "700",
        color: "#1a1a1a",
        textAlign: 'center',
        fontSize: 12
    }

}) ;
export default Icon;