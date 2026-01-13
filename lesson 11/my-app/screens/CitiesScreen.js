import React from "react";
import {StyleSheet, View, Text, FlatList} from "react-native";
import data from "../data/cities.json";

class CitiesScreen extends Comment {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        };
    }
    componentDidMount() {
        this.setState({cities: data});
    }
    renderItem = ({item}) =>{
        const {name, countryCode, population, description} = item;
        return (
            <View style={styles.cardWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{countryCode}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.small}>Population: {population}</Text>
            </View>
        );
    };
     render  () {
        return (
           <View>
            <Text style={styles.LisaBossi}>Cities</Text>

            <FlatList
                data={this.state.cities}
                keyExtractor={(item) =>
                    item.id ? item.id.toString() :index.toString()
                }
                renderItem={this.renderItem}
                ></FlatList>
           </View>
        );
    }
}

export default CitiesScreen;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 16,
    },
    LisaBossi:
    {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    cardWrapper:{
        backgroundColor: "#f0f0f0",
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle:{
        fontSize: 16,
        maginTop: 6,
        color: "#555",
    },
    description:{
        fontSize: 14,
        marginTop: 6,
        color: "#555",
    },
    small:{
        marginTop: 6,
        fontSize: 12,
        color: "#777",
    }

})