import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/theme";

const AppLG = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.container}
    />
  );
};

export default AppLG;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
