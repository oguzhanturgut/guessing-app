import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import DefaultStyles from "../constants/default-styles";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.random() * (max - min) + min;
  if (rnd === exclude) return generateNumber(min, max, exclude);
  return Math.ceil(rnd);
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    // console.log(direction, currentGuess, props.userChoice);

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((prevRounds) => prevRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <MaterialIcons name="remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <MaterialIcons name="add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
});

export default GameScreen;
