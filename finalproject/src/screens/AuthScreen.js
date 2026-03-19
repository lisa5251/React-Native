import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SPACING, RADIUS, SHADOW } from '../theme';

export default function AuthScreen() {
  const { login, register } = useContext(AuthContext);
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async () => {
    setError('');
    if (mode === 'register' && !name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() || !password.trim()) {
      setError('Email and password are required.');
      return;
    }

    if (mode === 'login') {
      const res = await login({ email, password });
      if (!res.ok) setError(res.message);
    } else {
      const res = await register({ name, email, password });
      if (!res.ok) setError(res.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
          <Text style={styles.title}>{mode === 'login' ? 'Welcome back' : 'Create account'}</Text>
          <Text style={styles.subtitle}>Save favorites and post what you cooked.</Text>

          <View style={styles.switchRow}>
            <TouchableOpacity
              onPress={() => setMode('login')}
              style={[styles.switchButton, mode === 'login' && styles.switchActive]}
            >
              <Text style={[styles.switchText, mode === 'login' && styles.switchTextActive]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode('register')}
              style={[styles.switchButton, mode === 'register' && styles.switchActive]}
            >
              <Text style={[styles.switchText, mode === 'register' && styles.switchTextActive]}>Register</Text>
            </TouchableOpacity>
          </View>

          {mode === 'register' && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={COLORS.muted}
              value={name}
              onChangeText={setName}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.muted}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={COLORS.muted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.primaryButton} onPress={submit}>
            <Text style={styles.primaryButtonText}>{mode === 'login' ? 'Login' : 'Create Account'}</Text>
          </TouchableOpacity>
        </View>
          </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  card: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    ...SHADOW.card,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: SPACING.xs,
    color: COLORS.muted,
    fontSize: 13,
  },
  switchRow: {
    flexDirection: 'row',
    marginTop: SPACING.md,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.highlight,
    borderRadius: 999,
  },
  switchButton: {
    flex: 1,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    borderRadius: 999,
  },
  switchActive: {
    backgroundColor: COLORS.primary,
  },
  switchText: {
    fontSize: 13,
    color: COLORS.muted,
    fontWeight: '600',
  },
  switchTextActive: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.sm,
    fontSize: 15,
    color: COLORS.text,
  },
  error: {
    color: '#C0392B',
    fontSize: 12,
    marginBottom: SPACING.sm,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
