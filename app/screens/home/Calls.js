import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { COLORS, FONTS } from "../../constants/theme";
import AppButton from "../../components/AppButton";
import CallComponent from "../../components/CallComponent";

import { useNavigation } from "@react-navigation/native";

const calls = [1, 2, 3, 4];

const Calls = () => {
  const navigaiton = useNavigation();
  return (
    <View style={GlobalStyles.screenContainer}>
      {calls.length === 0 ? (
        <View style={styles.noCallsContainer}>
          <Text style={[GlobalStyles.h1, styles.headNo]}>
            You haven't call yet
          </Text>
          <Text style={[GlobalStyles.text, styles.textoNo]}>
            Call together with your friends and family with IzzzyChat Now
          </Text>
          <AppButton
            title="Start New Call"
            style={{ minWidth: Dimensions.get("window").width / 1.4 }}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={calls}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <CallComponent onPress={() => navigaiton.navigate("callinfo")} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  noCallsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headNo: {
    color: COLORS.primary,
  },
  textoNo: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    color: COLORS.font,
    textAlign: "center",
    marginHorizontal: 25,
    marginVertical: 20,
  },
});
