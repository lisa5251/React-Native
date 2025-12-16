import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from "react-native";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function onRefresh() {
    setRefreshing(true);
    fetchUsers();
  }

  // simple deterministic pastel color by id
  function colorForId(id) {
    const colors = [
      "#FFD6A5",
      "#FDFFB6",
      "#CAFFBF",
      "#9BF6FF",
      "#A0C4FF",
      "#BDB2FF",
      "#FFC6FF",
      "#FFE5D9",
      "#E6E6FA",
      "#F0F8FF",
    ];
    return colors[id % colors.length];
  }

  function renderItem({ item }) {
    const avatarUri = `https://i.pravatar.cc/150?img=${(item.id % 70) + 1}`;
    const accent = colorForId(item.id);
    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.9}>
        <View style={[styles.accent, { backgroundColor: accent }]} />
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={[styles.rolePill, { backgroundColor: accent + "CC" }]}>
              <Text style={styles.roleText}>{item.username}</Text>
            </View>
          </View>

          <Text style={styles.email}>{item.email}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.company}>{item.company?.name}</Text>
            <Text style={styles.city}> • {item.address?.city}</Text>
          </View>
        </View>
        <Image
          source={{
            uri:
              "https://img.icons8.com/ios-glyphs/30/1A1A1A/chevron-right.png",
          }}
          style={styles.chev}
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Users</Text>
        <Text style={styles.headerSubtitle}>Fetched from JSONPlaceholder</Text>
      </View>

      {loading && !refreshing ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>Error: {error}</Text>
          <TouchableOpacity onPress={fetchUsers} style={styles.retry}>
            <Text style={styles.retryText}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomColor: "#f0f3f6",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0B1320",
  },
  headerSubtitle: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 13,
  },

  list: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    paddingBottom: 36,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    // shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 2,
  },

  accent: {
    width: 8,
    height: "100%",
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 12,
    margin: 12,
    backgroundColor: "#eef2ff",
  },

  info: {
    flex: 1,
    paddingRight: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B1320",
  },

  rolePill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    marginLeft: 8,
  },
  roleText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0B1320",
  },

  email: {
    color: "#475569",
    marginTop: 6,
    fontSize: 13,
  },

  metaRow: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "center",
  },

  company: {
    fontSize: 12,
    color: "#94a3b8",
  },

  city: {
    fontSize: 12,
    color: "#94a3b8",
  },

  chev: {
    width: 18,
    height: 18,
    tintColor: "#94a3b8",
    marginRight: 12,
  },

  center: {
    alignItems: "center",
    marginTop: 40,
  },

  error: {
    color: "#dc2626",
    marginBottom: 12,
  },

  retry: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  retryText: {
    color: "#fff",
    fontWeight: "600",
  },
});