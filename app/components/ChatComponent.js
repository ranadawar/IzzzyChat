import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import GlobalStyles from "../constants/GlobalStyles";
import { COLORS, FONTS } from "../constants/theme";

const ChatComponent = ({
  image = require("../../assets/images/woman.png"),
  name = "Maria",
  lastMessage = "Hello, how are you?",
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
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.time}>10:00 AM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
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
});
