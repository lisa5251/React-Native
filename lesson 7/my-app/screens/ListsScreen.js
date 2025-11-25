import React from "react";
import { View , Text, FlatList, Button } from "react-native";

const studentat = [
    {name : "Lisa", surname : "Suliqi", age: "15"},
    {name : "Jona", surname : "Kuka", age: "17"},
    {name : "John", surname : "Doe", age: "..."},
]

const  ListsScreen = () => {
    

    return(
        <View>
            <Text style={styles.textStyle} > Lista e studentave </Text>

            <FlatList data={studentat}
            keyExtractor={(item)=item.name}
            renderItem={(item)=>(
                <Text style={styles.textStyle}>{item.name} {item.surname}
                -mosha e personit eshte: {item.age} </Text>

            )}
            
            
            >

            <Button title="Go to Main screen"
                         onPress={()=> navigation.navigate("Main")}>
                         
                  </Button>

            </FlatList>
        </View>
   )
}

const styles = StyleSheet.create (
    {
    textStyle:{
        fontSize: 18,
        marginVertical : 5,
    }
}
)


export default ListsScreen;