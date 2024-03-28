import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import AppLG from "../../components/AppLG";
import { Image } from "expo-image";
import GlobalStyles from "../../constants/GlobalStyles";

import CurrencyInput from "react-native-currency-input";

import { CurrencyPicker } from "rn-currency-picker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";

const Money = () => {
  const [currency, setCurrency] = React.useState("USD");

  const [value, setValue] = React.useState(0.0);

  const currencyPickerRef = React.useRef(null);

  return (
    <View style={styles.mainContainer}>
      <View style={GlobalStyles.horizontalSB}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              contentFit="contain"
              source={require("../../../assets/icons/backwhite.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Transfer Money</Text>
        </View>
        <AppLG />
      </View>

      <View style={styles.personInfo}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/woman.png")}
          contentFit="contain"
        />
        <Text style={styles.name}>Maria</Text>
        <View style={GlobalStyles.horizontal}>
          <Text style={styles.bank}>Bank</Text>
          <Text style={styles.bank}>|</Text>
          <Text style={styles.bank}>3432434253</Text>
        </View>
      </View>
      <View
        style={{ height: 1, backgroundColor: COLORS.bgCom, marginVertical: 20 }}
      />

      <View style={{ flex: 1, padding: 20 }}>
        <View style={[GlobalStyles.horizontal, styles.containC]}>
          <View style={styles.currencyContainer}>
            <CurrencyPicker
              currencyPickerRef={(ref) => {
                currencyPickerRef.current = ref;
              }}
              enable={true}
              darkMode={false}
              currencyCode={currency}
              showFlag={false}
              showCurrencyName={false}
              showCurrencyCode={true}
              onSelectCurrency={(data) => {
                setCurrency(data.code);
              }}
              onOpen={() => {
                console.log("Open");
              }}
              onClose={() => {
                console.log("Close");
              }}
              showNativeSymbol={true}
              showSymbol={false}
              containerStyle={{
                container: {},
                flagWidth: 25,
                currencyCodeStyle: {
                  fontSize: 16,
                  color: COLORS.white,
                  fontFamily: FONTS.bold,
                },
                currencyNameStyle: {},
                symbolStyle: {
                  color: COLORS.white,
                },
                symbolNativeStyle: {
                  color: COLORS.white,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              }}
              modalStyle={{
                container: {
                  paddingTop: Platform.OS === "ios" ? 50 : 0,
                },
                searchStyle: {},
                tileStyle: {},
                itemStyle: {
                  itemContainer: {},
                  flagWidth: 25,
                  currencyCodeStyle: {
                    fontSize: 14,
                    color: COLORS.primary,
                  },
                  currencyNameStyle: {},
                  symbolStyle: {
                    color: COLORS.primary,
                  },
                  symbolNativeStyle: {},
                },
              }}
              title={"Currency"}
              searchPlaceholder={"Search Currency"}
              showCloseButton={true}
              showModalTitle={true}
            />
          </View>
          <CurrencyInput
            value={value}
            onChangeValue={setValue}
            placeholder="0.00"
            style={styles.currencyT}
          />
        </View>

        <View style={[GlobalStyles.horizontal, { gap: 15 }]}>
          <View style={styles.inputes}>
            <Text style={styles.texoTitle}>Schedule</Text>
            <AppTextInput placeholder="Now" />
          </View>
          <View style={styles.inputes}>
            <Text style={styles.texoTitle}>Schedule</Text>
            <AppTextInput placeholder="Now" />
          </View>
        </View>
        <View style={styles.inputess}>
          <Text style={styles.texoTitle}>Schedule</Text>
          <AppTextInput placeholder="Thanks for your hard work :)" />
        </View>

        <AppButton title="Continue" style={{ marginTop: 35 }} />
      </View>
    </View>
  );
};

export default Money;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
    marginVertical: 7,
  },
  number: {
    fontFamily: FONTS.regular,
    color: COLORS.grey,
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
  },
  personInfo: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bank: {
    color: COLORS.grey,
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginHorizontal: 2,
    marginTop: 5,
  },
  currencyContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  containC: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.bgCom,
    padding: 20,
    borderRadius: 15,
  },
  currencyT: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.font,
    flex: 1,
    marginLeft: 10,
    textAlign: "right",
  },

  inputes: {
    flex: 1,
    marginTop: 30,
  },
  inputess: {
    marginVertical: 13,
  },
  texoTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.font,
    marginBottom: 10,
  },
});
