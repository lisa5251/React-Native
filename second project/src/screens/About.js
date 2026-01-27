import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from 'react-native-swiper';

const About = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const cardWidth = Math.min(260, Math.round(width * 0.32));
  const sidePadding = Math.max(12, Math.round((width - cardWidth) / 2));
  const data = [
    { id: '1', image: require('../../assets/image1.avif'), title: 'Forest Stream', desc: 'A peaceful forest stream.' },
    { id: '2', image: require('../../assets/image2.jpg'), title: 'Sunlit Waterfall', desc: 'A sunlit waterfall.' },
    { id: '3', image: require('../../assets/image3.png'), title: 'Mountain Valley', desc: 'A wide mountain valley.' },
    { id: '4', image: require('../../assets/image1.avif'), title: 'Mossy Rocks', desc: 'Rocks covered in green moss near water.' },
    { id: '5', image: require('../../assets/image2.jpg'), title: 'Hidden Pool', desc: 'A hidden pool fed by a small waterfall.' },
    { id: '6', image: require('../../assets/image3.png'), title: 'Alpine Meadow', desc: 'A meadow framed by tall peaks.' },
  ];

  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => i.id}
          contentContainerStyle={{ paddingHorizontal: sidePadding }}
          snapToInterval={cardWidth + 16}
          decelerationRate="fast"
          renderItem={({ item }) => (
            <View style={[styles.card, { width: cardWidth, marginHorizontal: 8 }] }>
              <View style={styles.imageWrap}>
                <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                <View style={styles.badge}><Text style={styles.badgeText}>NATURE</Text></View>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.rating}>★★★★☆</Text>
                  <Text style={styles.metaSpacer}>·</Text>
                  <Text style={styles.metaSmall}>4.2k</Text>
                </View>
                <Text style={styles.cardDesc}>{item.desc}</Text>
                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>MORE</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  swiper: {
    height: 220,
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
  },
  imageWrap: {
    width: '100%',
    height: 140,
    backgroundColor: '#ddd',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    color: '#f1c40f',
    fontWeight: '700',
    marginRight: 6,
  },
  metaSmall: {
    color: '#888',
    fontSize: 12,
  },
  metaSpacer: {
    color: '#ccc',
    marginHorizontal: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  cardButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#7b5cff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  pagination: {
    bottom: 58,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginHorizontal: 4,
  }
});

export default About;
