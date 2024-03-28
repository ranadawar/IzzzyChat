import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../../constants/theme";
import AppButton from "../../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 2,
          }}
          source={require("../../../assets/images/image.png")}
          contentFit="contain"
        />
      </View>
      <View style={[GlobalStyles.screenContainer, styles.bottom]}>
        <Text style={[GlobalStyles.h1, styles.title]}>
          Welcome to IzzyChat!
        </Text>
        <Text style={styles.text}>
          The best messenger and chat app of the century to make your day great!
        </Text>
        <AppButton
          title="Get Started"
          style={styles.btn}
          onPress={() => navigation.navigate("PhoneNumber")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: -20,
  },
  btn: {
    minWidth: Dimensions.get("window").width / 1.3,
  },
  title: {
    color: COLORS.primary,
  },
  text: {
    fontSize: 18,
    color: COLORS.font,
    textAlign: "center",
    marginHorizontal: 25,
    marginVertical: 20,
    fontFamily: FONTS.regular,
  },
});
