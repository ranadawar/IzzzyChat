import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import AuthHeader from "../../components/AuthHeader";
import ImageInput from "../../components/ImageInput";
import AppForm from "../../components/form/AppForm";

import * as Yup from "yup";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import AppButton from "../../components/AppButton";

const initialValues = {
  fullName: "",
  nickName: "",
  dob: "",
  email: "",
  about: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().label("Full Name"),
  nickName: Yup.string().label("Nick Name"),
  dob: Yup.string().label("Date of Birth"),
  email: Yup.string().label("Email"),
  about: Yup.string().label("About"),
});

const FillProfile = ({ navigation }) => {
  const [imageUri, setImageUri] = useState("");

  return (
    <View style={GlobalStyles.parentContainer}>
      <AuthHeader title="Fill Your Profile" />
      <View style={GlobalStyles.screenContainer}>
        <View style={styles.imageContainer}>
          <ImageInput
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
        </View>
        <View>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => navigation.navigate("createpin")}
          >
            <View style={{ height: 45 }} />
            <AppFormField placeholder="Full Name" />
            <AppFormField placeholder="Nick Name" />
            <AppFormField
              placeholder="Date of Birth"
              icon={require("../../../assets/icons/cal.png")}
            />
            <AppFormField
              placeholder="Email"
              icon={require("../../../assets/icons/mail.png")}
            />
            <AppFormField placeholder="About" />
            <View style={{ height: 70 }} />
          </AppForm>
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate("createpin")}
          />
        </View>
      </View>
    </View>
  );
};

export default FillProfile;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
});
