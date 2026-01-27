import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Image } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Swiper
      style={styles.swiper}
      showsPagination={true}
      dotColor={"#999"}
      activeDotColor={"#007AFF"}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/image1.avif')}
            style={styles.slideImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../../assets/image2.jpg')}
            style={styles.slideImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../../assets/image3.png')}
            style={styles.slideImage}
            resizeMode="contain"
          />
        </View>

      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  swiper: {
    height: 300,
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    overflow: 'hidden',
    borderRadius: 10,
  },slideImage:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
  ,pagination: {
    bottom: 22,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#bbb',
    marginHorizontal: 3,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginHorizontal: 3,
  }
});

export default Home;
