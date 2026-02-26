import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Bird from "./src/components/Bird";
import Obstacles from "./src/components/Obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  // Bird position
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);

  // Gravity
  const gravity = 3;
  let gameTimerId;

  // Obstacles settings
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200;

  // First obstacle pair
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  let obstaclesTimerId;

  // Second obstacle pair
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2
  );
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  let obstaclesTimerIdTwo;

  // Bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((b) => b - gravity);
      }, 30);
    }

    return () => {
      clearInterval(gameTimerId);
    };
  }, [birdBottom]);

  // Move first obstacle
  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft((left) => left - 5);
      }, 30);

      return () => clearInterval(obstaclesTimerId);
    } else {
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  // Move second obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((left) => left - 5);
      }, 30);

      return () => clearInterval(obstaclesTimerIdTwo);
    } else {
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />

      <Obstacles
        color={"green"}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
      />

      <Obstacles
        color={"yellow"}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeightTwo}
        gap={gap}
        obstaclesLeft={obstaclesLeftTwo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});