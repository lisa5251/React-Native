import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import products from '../data/products.json';

const { width } = Dimensions.get('window');
const CARD_W = width * 0.9;
const IMG_H = CARD_W * 0.55;

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], loading: true, error: null };
  }

  componentDidMount() {
    // use static import so Metro resolves JSON correctly
    this.setState({ products, loading: false });
  }

  renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text numberOfLines={3} style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  render() {
    const { products, loading, error } = this.state;

    if (loading) {
      return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <Text>{error}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(i) => i.id.toString()}
          renderItem={this.renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' },
  list: { paddingVertical: 18 },
  card: {
    width: CARD_W,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
    elevation: 3
  },
  image: { width: '100%', height: IMG_H, borderRadius: 8, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: '700' },
  category: { fontSize: 12, color: '#666', marginTop: 4 },
  desc: { fontSize: 13, color: '#555', textAlign: 'center', marginTop: 8 },
  price: { marginTop: 8, fontSize: 18, fontWeight: '700' }
});