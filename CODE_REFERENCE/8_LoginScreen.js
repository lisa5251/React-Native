import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  const [phoneId, setPhoneId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!phoneId || !password) {
      Alert.alert('Error', 'Please enter phone ID and password');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - in real app, verify with backend
      const waiterName = 'Waiter ' + phoneId;
      
      // Call login to save user in context
      login(phoneId, waiterName, 'waiter');
      
      // Navigate to shift screen
      navigation.navigate('Shift');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Waiter Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Phone ID"
        value={phoneId}
        onChangeText={setPhoneId}
        editable={!loading}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        editable={!loading}
      />

      <CustomButton
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        color="#2196F3"
      />

      {/* Option to access as customer/chef for testing */}
      <CustomButton
        title="Access as Customer (Menu)"
        onPress={() => {
          login('customer', 'Customer', 'customer');
          navigation.navigate('Menu');
        }}
        color="#4CAF50"
      />

      <CustomButton
        title="Access as Chef"
        onPress={() => {
          login('kitchen', 'Chef', 'kitchen');
          navigation.navigate('Kitchen');
        }}
        color="#FF9800"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
