import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { COLORS, RADIUS, SPACING } from '../theme';

function getInitials(name) {
  if (!name) return 'U';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export default function ProfileBadge() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const initials = getInitials(user?.name || user?.email || 'User');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MyKitchen')}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{initials}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
