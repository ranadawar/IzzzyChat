import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { OtpInput } from "react-native-otp-entry";
import GlobalStyles from "../../constants/GlobalStyles";
import { COLORS } from "../../constants/theme";
import AuthHeader from "../../components/AuthHeader";
import AppButton from "../../components/AppButton";

const CreatePin = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <AuthHeader title="Create a Pin" />
      <View style={styles.containers}>
        <Text
          style={[
            GlobalStyles.text,
            {
              textAlign: "center",
              color: COLORS.font,
              marginTop: Dimensions.get("window").height / 15,
              marginBottom: Dimensions.get("window").height / 30,
              fontSize: 16,
              marginHorizontal: 45,
            },
          ]}
        >
          Add a PIN number to make your account more secure.
        </Text>
        <OtpInput
          numberOfDigits={4}
          focusColor={COLORS.primary}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          secureTextEntry
          theme={{
            containerStyle: styles.container,
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
      </View>
      <KeyboardAvoidingView style={{ marginBottom: 80 }} behavior="padding">
        <View style={{ marginHorizontal: 30 }}>
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate("FillProfile")}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  activePinCodeContainer: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightPrimary,
  },
  pinCodeContainer: {
    width: Dimensions.get("window").width / 6,
  },
  container: {
    marginHorizontal: Dimensions.get("window").width / 10,
  },
  inputsContainer: {
    backgroundColor: COLORS.bgCom,
    marginVertical: 20,
  },
});
