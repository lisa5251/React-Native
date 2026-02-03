import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Image } from "react-native";
import Icon from "../components/icons";


import Items from "../components/items";
import itemData from "../data/data.json";

const Home = () => {
  
  const navigation = useNavigation();
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    setProducts(itemData.popularprofucts);
  }, []);


  return (
    <FlatList
    ListHeaderComponent={
      <>
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
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/image1.avif')}
              style={styles.slideImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/image2.jpg')}
              style={styles.slideImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.slide}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/image3.png')}
              style={styles.slideImage}
              resizeMode="contain"
            />
          </View>
        </View>

      </Swiper>
      
      
      <View style={styles.IconsContainer}>
        <Icon name="cellphone-iphone" iconText="Phone" />
        <Icon name="android" iconText="Samsung" />
        <Icon name="laptop" iconText="Laptop" />
      </View>

      <View style={styles.IconsContainer}>
        <Icon name="tablet" iconText="Tablet" />
        <Icon name="mouse" iconText="Mouse" />
        <Icon name="keyboard-outline" iconText="Printer" />
      </View>
      </>
    } data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => <Items item={item} />}
    contentContainerStyle={styles.container}
    >
    
    </FlatList>
  );
};

const styles = StyleSheet.create({
    IconsContainer:{
    width:"90%",
    alignSelf:"center",
    marginTop:30,
    flexDirection:"row",
    justifyContent:"space-between"


  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  swiper: {
    height: 280,
    width: '100%',
    position: 'relative',
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: 'hidden',
    borderRadius: 10,
    paddingVertical: 8,
  },slideImage:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
  ,imageWrapper: {
    width: '84%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,pagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 6,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
    marginHorizontal: 6,
  }
});

export default Home;
