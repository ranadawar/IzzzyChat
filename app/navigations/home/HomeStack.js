import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import CallInfo from "../../screens/home/CallInfo";
import Messages from "../../screens/home/Messages";
import Money from "../../screens/home/Money";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="hhome" component={HomeScreen} />
      <Stack.Screen name="callinfo" component={CallInfo} />
      <Stack.Screen name="chatscreen" component={Messages} />
      <Stack.Screen name="money" component={Money} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
