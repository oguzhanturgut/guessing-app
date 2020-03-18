import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from "react-native-web/src/exports/TextInput";
import NumberContainer from "../components/NumberContainer";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.random() + (max - min) + min;
  if (rnd === exclude) return generateNumber(min, max, exclude);
  return rnd;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
    buttonContainer:{
      flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        maxWidth:'80%'
    }
});

export default GameScreen;
