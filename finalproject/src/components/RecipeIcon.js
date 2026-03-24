import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

const COLOR_POOL = [
  '#FF7A59',
  '#2A9D8F',
  '#F4B860',
  '#457B9D',
  '#E76F51',
  '#5E60CE',
  '#06D6A0',
  '#8D99AE',
];

const getInitials = (title) => {
  if (!title) return '?';
  const words = title.match(/[A-Za-z0-9]+/g) || [];
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const RecipeIcon = ({ title, size = 56, style, textStyle }) => {
  const initials = useMemo(() => getInitials(title), [title]);
  const color = useMemo(() => {
    const hash = hashString(title || '');
    return COLOR_POOL[hash % COLOR_POOL.length];
  }, [title]);
  const fontSize = Math.max(10, Math.round(size * 0.38));

  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize }, textStyle]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});

export default RecipeIcon;
