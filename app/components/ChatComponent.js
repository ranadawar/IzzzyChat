import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import GlobalStyles from "../constants/GlobalStyles";
import { COLORS, FONTS } from "../constants/theme";

const ChatComponent = ({
  image = require("../../assets/images/woman.png"),
  name = "Maria",
  lastMessage = "Hello, how are you?",
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[GlobalStyles.horizontal, { gap: 15 }]}>
        <Image
          contentFit="cover"
          style={GlobalStyles.profileImage}
          source={image}
        />
        <View style={styles.names}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: COLORS.font,
              marginBottom: 5,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.grey,
              fontFamily: FONTS.light,
            }}
          >
            {lastMessage}
          </Text>
        </View>
      </View>
    </View>
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
  },
});
