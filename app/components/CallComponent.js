import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CallComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>ChatComponent</Text>
    </View>
  );
};

export default CallComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 3,
    padding: 10,
  },
});
