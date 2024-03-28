import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Moments from "../screens/Moments";
import Wallet from "../screens/Wallet";
import Settings from "../screens/Settings";
import { Image } from "expo-image";
import TabBarIcon from "../components/TabBarIcon";

import home from "../../assets/icons/homes.svg";
import HomeIcon from "../../assets/svgs/HomeIcon";
import { COLORS } from "../constants/theme";
import MomentIcon from "../../assets/svgs/MomentIcon";

import SVGUri from "react-native-svg";
import HomeStack from "./home/HomeStack";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Chats"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? COLORS.primary : COLORS.grey} />
          ),
        }}
      />
      <Tab.Screen
        name="Moments"
        component={Moments}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/moments.svg")}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.grey,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/wallets.svg")}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.grey,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/Setting.svg")}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.grey,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
