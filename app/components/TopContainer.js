import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLG from "./AppLG";

const TopContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <View></View>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  mainContainer: {
    height: 145,
    flexDirection: "row",
    backgroundColor: "black",
  },
});
