import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";

import data from "../data/data.json";
import Items from "../components/items";

class Ios extends React.Component {
    constructor(){
        super();
        this.state={
            product:[],
        };
    }

    componentDidMount(){
        this.setState({product:data.Android});
    }
    render(){
        return(
           <ScrollView>
            <View>
                <Text>
                lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text> 
             </View> 
             <View>
                <FlatList data={this.state.product.Android}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=><Items item={item}></Items>}
                ></FlatList>
             </View>

             <TouchableOpacity>
                <Text>
                    View More
                </Text>
             </TouchableOpacity>
           </ScrollView> 
        );
    }
}
export default Android;

const styles=StyleSheet.create({
    container:{
        padding:15,
    },
    desc:{
        marginBottom:15,
        fontSize:14,
    },
    productContainer:{
        marginBottom:20,
    },
    btn:{
        backgroundColor:"#788bf7ff",
        padding:10,
        borderRadius:5,
        alignItems:"center",
    },
    btnText:{
        color:"#fff",
    }
});