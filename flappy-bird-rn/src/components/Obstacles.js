import React from "react";

import { View, Dimensions } from "react-native";

const Obstacles = ({
    color,
    ObstacleWidth,
    obstacleHeight,
    randomBottom,
    gap,
    obstacleLeft,
})=>{
    const screenHeight = Dimensions.get("screen").height;
    const topObstacleHeight = Math.max(
        0,
        screenHeight - (randomBottom + obstacleHeight + gap)
    );
    return(
        <>
            <View
            
                style={{
                    position: "absolute",
                    backgroundColor: color,
                    width: ObstacleWidth,
                    height: topObstacleHeight,
                    left: obstacleLeft,
                    bottom: randomBottom + obstacleHeight + gap
                }}>

            </View>

            <View
                style={{
                    position: "absolute",
                    backgroundColor: color,
                    width: ObstacleWidth,
                    height: obstacleHeight,
                    left: obstacleLeft,
                    bottom: randomBottom
                }}>

            </View>
        
        
        
        </>
    )
};

export default Obstacles;
