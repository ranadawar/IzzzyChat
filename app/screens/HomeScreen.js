import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopContainer from "../components/TopContainer";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/theme";
import AppLG from "../components/AppLG";
import { Image } from "expo-image";
import GlobalStyles from "../constants/GlobalStyles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import TopBar from "../navigations/home/TopBar";

const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const HomeScreen = () => {
  const name = "Maria";
  return (
    <View style={GlobalStyles.screenContainerWP}>
      <View style={styles.topContainer}>
        <View style={[GlobalStyles.horizontalSB, styles.info]}>
          <View style={[GlobalStyles.horizontal, { gap: 15 }]}>
            <Image
              contentFit="cover"
              source={require("../../assets/images/woman.png")}
              style={GlobalStyles.profileImage}
            />
            <View>
              <Text style={GlobalStyles.h6}>Hello, {name}</Text>
              <Text style={GlobalStyles.h6}>Profile</Text>
            </View>
          </View>
          <View style={[GlobalStyles.horizontal, { gap: 15 }]}>
            <MaterialCommunityIcons name="magnify" size={32} color="white" />
            <MaterialCommunityIcons name="menu" size={32} color="white" />
          </View>
        </View>
        <AppLG />
      </View>

      <View style={{ marginTop: -50, flex: 1 }}>
        <TopBar />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topContainer: {
    height: 175,
    flexDirection: "row",
  },
  info: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
  },
});
