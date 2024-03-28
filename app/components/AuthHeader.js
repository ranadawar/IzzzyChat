import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../constants/theme";

const AuthHeader = ({ title, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../../assets/icons/back.png")}
          contentFit="contain"
        />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.font,
    fontSize: 24,
    marginLeft: 15,
  },
});
