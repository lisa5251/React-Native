import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import data from "../../data/data.json";
import Items from "../components/items";

class Ios extends React.Component {
    constructor(){
        super();
        this.state={
            product:[],
        };
    }

    componentDidMount(){
        this.setState({product:data.ios});
    }
    render(){
        return(
           <ScrollView style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="apple" size={32} color="#00a8e8" />
                <Text style={styles.headerTitle}>Apple Devices</Text>
                <Text style={styles.headerSubtitle}>Innovation & Quality</Text>
            </View>

            <View style={styles.descriptionBox}>
                <Text style={styles.description}>
                    Experience premium Apple products with seamless integration, elegant design, and powerful performance. Explore the full ecosystem of iPhones and devices.
                </Text> 
            </View>

            <View style={styles.productsWrapper}>
                <Text style={styles.sectionTitle}>Latest Models</Text>
                <FlatList 
                    data={this.state.product}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=><Items item={item}></Items>}
                    scrollEnabled={false}
                />
            </View>

            <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>View More</Text>
                <MaterialCommunityIcons name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity>
           </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f8f9fa"
    },
    header:{
        backgroundColor:"#fff",
        paddingHorizontal:20,
        paddingVertical:24,
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#e0e0e0"
    },
    headerTitle:{
        fontSize:28,
        fontWeight:"800",
        color:"#1a1a1a",
        marginTop:12,
        marginBottom:4
    },
    headerSubtitle:{
        fontSize:14,
        color:"#888",
        fontWeight:"500"
    },
    descriptionBox:{
        backgroundColor:"#fff",
        marginHorizontal:12,
        marginVertical:16,
        padding:16,
        borderRadius:12,
        borderLeftWidth:4,
        borderLeftColor:"#00a8e8"
    },
    description:{
        fontSize:14,
        color:"#555",
        lineHeight:21,
        fontWeight:"500"
    },
    productsWrapper:{
        paddingVertical:8
    },
    sectionTitle:{
        fontSize:18,
        fontWeight:"800",
        color:"#1a1a1a",
        marginHorizontal:20,
        marginBottom:12,
        marginTop:8
    },
    viewMoreButton:{
        backgroundColor:"#00a8e8",
        marginHorizontal:20,
        marginVertical:20,
        paddingVertical:14,
        borderRadius:12,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        boxShadow: '0px 4px 12px rgba(0, 168, 232, 0.3)',
        elevation:4
    },
    viewMoreText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"700",
        marginRight:8
    }
});

export default Ios;