import React from "react";
import { FlatList, View, Text, StyleSheet, Platform } from "react-native";

class PostsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const jsonData = await response.json();

            this.setState({ posts: jsonData });
        } catch (error) {
            console.log("Error fetching posts", error);
        }
    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.meta} numberOfLines={1}>
                POST • {item.id}
            </Text>

            <Text
                style={styles.title}
                numberOfLines={2}
                allowFontScaling
                ellipsizeMode="tail"
            >
                {item.title}
            </Text>

            <Text
                style={styles.body}
                numberOfLines={3}
                allowFontScaling
                ellipsizeMode="tail"
            >
                {item.body}
            </Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this.renderItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // layout
    container: {
        flex: 1,
        backgroundColor: "#F6F8FA", // very light cool background
    },
    listContent: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    item: {
        paddingVertical: 18,
        paddingHorizontal: 14,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        // subtle cross-platform separation
        ...Platform.select({
            ios: {
                shadowColor: "#0b1226",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.03,
                shadowRadius: 6,
            },
            android: {
                elevation: 0,
            },
        }),
    },

    // small uppercase meta for hierarchy
    meta: {
        fontSize: 11,
        lineHeight: 14,
        color: "#8B94A6",
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 6,
        fontWeight: Platform.OS === "ios" ? "600" : "700",
    },

    // headline: larger, tight leading, slightly condensed feel
    title: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: Platform.OS === "ios" ? "700" : "800",
        color: "#0B1320",
        marginBottom: 8,
        letterSpacing: -0.2,
    },

    // readable paragraph: muted color, comfortable line-height
    body: {
        fontSize: 15,
        lineHeight: 22,
        color: "#55606E",
        fontWeight: "400",
        letterSpacing: 0.2,
        opacity: 0.95,
    },
});

export default PostsScreen;