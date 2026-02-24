import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Bird from './src/components/Bird';
import Obstacles from './src/components/obstacles';


export default function App() {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);

  const gravity = 3;
  let gameTimerId;

  const ObstacleWidth=60;
  const obstacleHeight=300;
  const gap=200;
  const [obstacleLeft, setObstacleLeft] = useState(screenWidth);
  const [obstacleNegHeight, setObstacleNegHeight] = useState(0);
  let obstacleTimerId;

  const [obstacleLeftTwo, setObstacleLeftTwo] = useState(screenWidth + screenWidth / 2);
  const [obstacleNegHeightTwo, setObstacleNegHeightTwo] = useState(0);
  
  let obstacleTimerIdTwo;

  useEffect(() => {
    if (obstacleLeft > -ObstacleWidth) {
      obstacleTimerId = setInterval(() => {
        setObstacleLeft((left) => left - 5);
      }, 30);
    
    return() => clearInterval(obstacleTimerId);
    }else
    {      
      setObstacleLeft(screenWidth);
      setObstacleNegHeight(-Math.random() * 100);
      
    }
  }, [obstacleLeft]);
    useEffect(() => {
    if (obstacleLeftTwo > -ObstacleWidth) {
      obstacleTimerIdTwo = setInterval(() => {
        setObstacleLeftTwo((left) => left - 5);
      }, 30);
    
    return() => clearInterval(obstacleTimerIdTwo);
    }else
    {      
      setObstacleLeftTwo(screenWidth);
      setObstacleNegHeightTwo(-Math.random() * 100);
      
    }
  }, [obstacleLeftTwo]);


  
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);
    }

    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  return (
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles
        color={"green"}
        ObstacleWidth={ObstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstacleNegHeight}
        gap={gap}
        obstacleLeft={obstacleLeft}>

      </Obstacles>
      <Obstacles
        color={"yellow"}
        ObstacleWidth={ObstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstacleNegHeightTwo}
        gap={gap}
        obstacleLeft={obstacleLeftTwo}>

      </Obstacles>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
