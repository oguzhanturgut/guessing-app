import React from 'react';
import {View, Text,StyleSheet} from 'react-native'

import Colors from '../constants/colors'

const Header = (props) => {
    return <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: { fontSize: 18, color: "black" }
});
