import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Go to list screen"
       onPress={()=> navigation.navigate("List")}>
       
      </Button>
        <Button title="Go to Lisa screen"
       onPress={()=> navigation.navigate("Lisa")}>
       
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
