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

const OTPScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <AuthHeader title="OTP Code Verification" />
      <View style={styles.containers}>
        <Text
          style={[
            GlobalStyles.text,
            {
              textAlign: "center",
              color: COLORS.font,
              marginTop: Dimensions.get("window").height / 15,
              marginBottom: Dimensions.get("window").height / 30,
            },
          ]}
        >
          Code has been send to +1 111 ******99
        </Text>
        <OtpInput
          numberOfDigits={4}
          focusColor={COLORS.primary}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: styles.container,
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />

        <Text
          style={[
            GlobalStyles.text,
            {
              textAlign: "center",
              color: COLORS.font,
              marginTop: Dimensions.get("window").height / 15,
              marginBottom: Dimensions.get("window").height / 30,
            },
          ]}
        >
          Resend OTP in <Text style={{ color: COLORS.primary }}>00:30</Text> s
        </Text>
      </View>
      <KeyboardAvoidingView style={{ marginBottom: 80 }} behavior="padding">
        <View style={{ marginHorizontal: 30 }}>
          <AppButton
            title="Verify"
            onPress={() => navigation.navigate("FillProfile")}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OTPScreen;

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
