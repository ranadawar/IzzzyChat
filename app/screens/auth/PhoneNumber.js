import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";
import { COLORS } from "../../constants/theme";

import PhoneInput from "react-native-phone-number-input";
import AppButton from "../../components/AppButton";

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={require("../../../assets/icon.png")}
            contentFit="contain"
          />
        </View>
        <Text style={[GlobalStyles.h2, styles.heading]}>
          Welcome to IzzyChat!
        </Text>
        <View style={styles.inputContainer}>
          <PhoneInput
            countryPickerButtonStyle={{ backgroundColor: COLORS.bgCom }}
            codeTextStyle={{ display: "none" }}
            defaultValue={phoneNumber}
            defaultCode="NL"
            layout="first"
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
        </View>

        <View style={{ marginHorizontal: 15, marginTop: 45 }}>
          <AppButton
            title="Sign In"
            backgroundColor={
              phoneNumber.length > 0 ? COLORS.primary : COLORS.secondary
            }
            onPress={() => navigation.navigate("OTPScreen")}
          />
        </View>
      </View>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Dimensions.get("window").height / 13,
  },
  heading: {
    color: COLORS.font,
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginVertical: 20,
    marginTop: 35,
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
});
