import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Projects({ image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 150, height: 100, borderRadius: 8, overflow: "hidden", backgroundColor: "#eee" },
  image: { width: "100%", height: "100%" },
});