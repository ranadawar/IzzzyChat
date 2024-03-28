import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import AppLG from "../../components/AppLG";
import { Image } from "expo-image";
import GlobalStyles from "../../constants/GlobalStyles";

const CallInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            contentFit="contain"
            source={require("../../../assets/icons/backwhite.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Call Info</Text>

        <AppLG />
      </View>

      <View>
        <View
          style={[
            GlobalStyles.horizontalSB,
            {
              padding: 20,
              borderBottomColor: COLORS.bgCom,
              borderBottomWidth: 0.5,
            },
          ]}
        >
          <View style={GlobalStyles.horizontal}>
            <Image
              source={require("../../../assets/images/woman.png")}
              style={{ width: 70, height: 70, borderRadius: 35 }}
            />
            <View>
              <Text style={styles.name}>Maria</Text>
              <Text style={styles.number}>+1 5500 4324 223</Text>
            </View>
          </View>
          <View style={[GlobalStyles.horizontal, { gap: 14 }]}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../assets/icons/calling.png")}
              contentFit="contain"
            />
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../assets/icons/video.png")}
              contentFit="contain"
            />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default CallInfo;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  bg: {
    backgroundColor: COLORS.bgCom,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    marginLeft: 15,
    fontFamily: FONTS.semiBold,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontFamily: FONTS.bold,
    color: COLORS.font,
    fontSize: 20,
    marginLeft: 15,
  },
  number: {
    fontFamily: FONTS.regular,
    color: COLORS.grey,
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
  },
});
