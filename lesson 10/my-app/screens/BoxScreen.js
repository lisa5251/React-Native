import react from "react";
import { View, StyleSheet, Text } from "react-native"





const BoxScreen =()=>{
    return(
      
        <View style={styles.container}>
            <Text style={styles.title}> flex direction: "row" </Text>

            <View style={styles.boxArea}>
                <View></View>
            </View>


        </View>
    )
        
};
const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        alingnItems:"center",
        backgroundColor:"#fff",
        },


        title: {
          fontSize:20,
          marginBottom:12,
        },

        boxArea:{
            width:"95%",
            


            backgroundColor:"#eaf",
            justifyContent:"center",
            paddimgHorizontal:10,
            flexDirection:"row",
            alignItems:"center",
        },
       
        box:{
            width:50,
            height:50,
            backgroundColor:"#48f",
            margin:5,
        },
    
})



export  default BoxScreen