import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import AuthNavigator from "./app/navigations/AuthNavigation";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Urbanist-Bold.ttf"),
    EncodeSansBoldItalic: require("./assets/fonts/Urbanist-BoldItalic.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/Urbanist-SemiBold.ttf"),
    EncodeSansSemiBoldItalic: require("./assets/fonts/Urbanist-SemiBoldItalic.ttf"),
    EncodeSansMedium: require("./assets/fonts/Urbanist-Medium.ttf"),
    EncodeSansMediumItalic: require("./assets/fonts/Urbanist-MediumItalic.ttf"),
    EncodeSansRegular: require("./assets/fonts/Urbanist-Regular.ttf"),
    EncodeSansRegularItalic: require("./assets/fonts/Urbanist-Italic.ttf"),
    EncodeSansLight: require("./assets/fonts/Urbanist-Light.ttf"),
    EncodeSansLightItalic: require("./assets/fonts/Urbanist-LightItalic.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
