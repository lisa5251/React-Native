import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import StudentInfo from "../components/StudentInfo";
import Projects from "../components/Projects";

export default function ProfileScreen() {
  const projects = [
    require("../assets/project1.png"),
    require("../assets/project2.png"),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StudentInfo
        fullname="John Doe"
        position="UI/UX Designer"
        description="We're passionate about creating beautiful design for startups & leading brands"
        profileImage={require("../assets/profile.png")}
      />

      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>PROJECTS</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.projectsRow}>
        {projects.map((img, i) => (
          <Projects key={i} image={img} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff" },
  projectsHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 24, marginBottom: 12 },
  projectsTitle: { fontWeight: "700", fontSize: 14 },
  viewAll: { color: "#ffb400", fontWeight: "600" },
  projectsRow: { flexDirection: "row", justifyContent: "space-between" },
});