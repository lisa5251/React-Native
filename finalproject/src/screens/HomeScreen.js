import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Customer Menu" onPress={() => navigation.navigate('Menu')} />
      <Button title="Waiter" onPress={() => navigation.navigate('Waiter')} />
      <Button title="Kitchen" onPress={() => navigation.navigate('Kitchen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
    backgroundColor: '#fff',
  },
});