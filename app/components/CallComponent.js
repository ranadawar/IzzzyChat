import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import GlobalStyles from "../constants/GlobalStyles";
import { COLORS, FONTS } from "../constants/theme";

const CallComponent = ({
  image = require("../../assets/images/woman.png"),
  name = "Maria",
  callType = "incoming",
  date = "Decemeber 12, 2021, 10:00 AM",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={[GlobalStyles.horizontal, { gap: 15 }]}>
        <Image
          contentFit="cover"
          style={GlobalStyles.profileImage}
          source={image}
        />
        <View style={styles.names}>
          <Text style={styles.name}>{name}</Text>
          <View style={GlobalStyles.horizontal}>
            <View style={GlobalStyles.horizontal}>
              <Image
                contentFit="contain"
                source={require("../../assets/icons/miss.png")}
                style={{ width: 14, height: 14 }}
              />
              <Text style={styles.gray}>Missed (5)</Text>
            </View>
            <Text style={[styles.gray, { marginHorizontal: 5 }]}>|</Text>
            <Text style={styles.gray}>{date}</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../assets/icons/miss.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CallComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  name: {
    fontFamily: FONTS.bold,
    color: COLORS.font,
    marginBottom: 5,
    fontSize: 16,
  },
  lastMessage: {
    fontFamily: FONTS.regular,
    color: COLORS.grey,
  },
  time: {
    color: COLORS.grey,
    fontSize: 12,
  },
  gray: {
    color: COLORS.grey,
    fontSize: 10,
  },
});
