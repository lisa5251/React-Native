import React from "react";
import{
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity
}from "react-native";

const Items = ({item}) => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.imageWrapper}>
                <Image 
                    source={{uri:item.image}}
                    style={styles.img}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"#fff",
        borderRadius:16,
        marginBottom:16,
        marginHorizontal:12,
        overflow:"hidden",
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        elevation: 4,
    },
    imageWrapper:{
        width:"100%",
        height:200,
        backgroundColor:"#f5f5f5",
        overflow:"hidden"
    },
    img:{
        width:"100%",
        height:"100%",
    },
    textContainer:{
        paddingHorizontal:16,
        paddingVertical:12,
    },
    name:{
        fontSize:16,
        fontWeight:"700",
        marginTop:8,
        color:"#1a1a1a",
        marginBottom:6
    },
    category:{
        color:"#00a8e8",
        fontSize:12,
        fontWeight:"600",
        textTransform:"uppercase",
        letterSpacing:0.5
    },
    desc:{
        fontSize:12,
        color:"#666",
        lineHeight:16,
        marginBottom:12
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:4
    },
    price:{
        backgroundColor:"#00a8e8",
        color:"#fff",
        paddingHorizontal:14,
        paddingVertical:8,
        borderRadius:20,
        fontSize:14,
        fontWeight:"700"
    },
    addButton:{
        backgroundColor:"#00a8e8",
        width:36,
        height:36,
        borderRadius:18,
        justifyContent:"center",
        alignItems:"center"
    },
    addButtonText:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    }
})
export default Items;