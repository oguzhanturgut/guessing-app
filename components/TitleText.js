import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => (
  <Text styles={{ ...styles.title, ...props.title }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
