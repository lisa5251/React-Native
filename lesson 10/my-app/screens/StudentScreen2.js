import React from "react";
import { View ,Text,StyleSheet} from "react-native-web";
import StudentInfo2 from "../components/StudentInfo2";

const StudentScreen =()=> {
    return(

        <View>
            <StudentInfo2
            fullname = {"donjeta"}
            position = {"Developer"}
            desc = {"I am a developer"}

            ></StudentInfo2>
        </View>

    )

}





export default StudentScreen;


