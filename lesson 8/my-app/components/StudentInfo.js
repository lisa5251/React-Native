import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function StudentInfo({ fullname, position, description, profileImage }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageHolder}>
        <Image source={profileImage} style={styles.profileImage} resizeMode="cover" />
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>{fullname}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.desc}>{description}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: "center" },
  imageHolder: {
    width: 220,
    height: 220,
    borderRadius: 18,
    backgroundColor: "#6fc4e8",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%" },
  card: {
    width: 260,
    backgroundColor: "#fff",
    marginTop: -30,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  name: { fontWeight: "700", fontSize: 16 },
  position: { color: "#888", marginTop: 4, fontSize: 12 },
  desc: { textAlign: "center", marginTop: 8, color: "#666", fontSize: 12 },
  button: { marginTop: 12, backgroundColor: "#ffd24d", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  buttonText: { fontWeight: "700", color: "#fff" },
});