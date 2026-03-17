import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RecipesContext } from '../context/RecipesContext';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SPACING, RADIUS, SHADOW } from '../theme';

export default function MyKitchenScreen() {
  const { posts, addPost, removePost } = useContext(RecipesContext);
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState('5');
  const [photoUrl, setPhotoUrl] = useState('');

  const submit = () => {
    if (!title.trim()) return;
    addPost({
      title,
      notes,
      rating: Number(rating) || 0,
      photoUrl,
    });
    setTitle('');
    setNotes('');
    setRating('5');
    setPhotoUrl('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Kitchen</Text>
          <Text style={styles.subtitle}>Welcome, {user?.name || 'chef'}.</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Feather name="log-out" size={16} color={COLORS.primary} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.sectionTitle}>Share what you cooked</Text>
        <TextInput
          style={styles.input}
          placeholder="Recipe title"
          placeholderTextColor={COLORS.muted}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="How did it go? Any tweaks?"
          placeholderTextColor={COLORS.muted}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.ratingInput]}
            placeholder="Rating 1-5"
            placeholderTextColor={COLORS.muted}
            value={rating}
            onChangeText={setRating}
            keyboardType="number-pad"
          />
          <TextInput
            style={[styles.input, styles.photoInput]}
            placeholder="Photo URL (optional)"
            placeholderTextColor={COLORS.muted}
            value={photoUrl}
            onChangeText={setPhotoUrl}
          />
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={submit}>
          <Text style={styles.primaryButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Your posts</Text>
        <Text style={styles.sectionSubtitle}>{posts.length} entries</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No posts yet. Share your first meal.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            {item.photoUrl ? (
              <Image source={{ uri: item.photoUrl }} style={styles.postImage} />
            ) : null}
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>{item.title}</Text>
              {item.rating ? <Text style={styles.postRating}>Rating: {item.rating}/5</Text> : null}
              {item.notes ? <Text style={styles.postNotes}>{item.notes}</Text> : null}
              <TouchableOpacity style={styles.deleteButton} onPress={() => removePost(item.id)}>
                <Feather name="trash" size={14} color="#C0392B" />
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
  },
  header: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: SPACING.xs,
    fontSize: 13,
    color: COLORS.muted,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.highlight,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: 999,
  },
  logoutText: {
    marginLeft: SPACING.xs,
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 12,
  },
  formCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
    ...SHADOW.card,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.muted,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginTop: SPACING.sm,
    fontSize: 14,
    color: COLORS.text,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
  },
  ratingInput: {
    width: 90,
    marginRight: SPACING.sm,
  },
  photoInput: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  listContent: {
    paddingBottom: 120,
  },
  postCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    ...SHADOW.card,
  },
  postImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  postContent: {
    padding: SPACING.md,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  postRating: {
    marginTop: SPACING.xs,
    color: COLORS.muted,
    fontSize: 12,
  },
  postNotes: {
    marginTop: SPACING.sm,
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 20,
  },
  deleteButton: {
    marginTop: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    marginLeft: SPACING.xs,
    color: '#C0392B',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: SPACING.lg,
  },
});
