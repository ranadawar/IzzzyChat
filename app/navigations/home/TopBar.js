import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "../../screens/home/Chats";
import Calls from "../../screens/home/Calls";
import { COLORS, FONTS } from "../../constants/theme";

const Tab = createMaterialTopTabNavigator();
const TopBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "transparent", height: 50 },
        tabBarIndicatorStyle: { backgroundColor: COLORS.white },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONTS.bold,
          color: COLORS.white,
        },
      }}
    >
      <Tab.Screen name="Chat" component={Chats} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
