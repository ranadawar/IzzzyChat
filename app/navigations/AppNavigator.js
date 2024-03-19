import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Moments from "../screens/Moments";
import Wallet from "../screens/Wallet";
import Settings from "../screens/Settings";
import { Image } from "expo-image";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                contentFit="contain"
                style={{ width: 24, height: 24 }}
                source={require("../../assets/icons/chatc.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Moments" component={Moments} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
