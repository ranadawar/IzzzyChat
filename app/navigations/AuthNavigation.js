import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import PhoneNumber from "../screens/auth/PhoneNumber";
import OTPScreen from "../screens/auth/OTPScreen";
import FillProfile from "../screens/auth/FillProfile";
import CreatePin from "../screens/auth/CreatePin";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="FillProfile" component={FillProfile} />
      <Stack.Screen name="createpin" component={CreatePin} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
