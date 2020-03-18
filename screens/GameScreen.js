import React from "react";
import { View, Text, StyleSheet } from "react-native";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.random() + (max - min) + min;
  if (rnd === exclude) return generateNumber(min, max, exclude);
  return rnd;
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateNumber(1,100,props.userChoice));
    return <View></View>;
};

const styles = StyleSheet.create({ container: {} });

export default GameScreen;
