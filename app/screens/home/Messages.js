import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import AppLG from "../../components/AppLG";
import { Image } from "expo-image";
import GlobalStyles from "../../constants/GlobalStyles";

import { useNavigation } from "@react-navigation/native";

const texts = [
  {
    id: 1,
    text: "Hello, how are you?",
    isMe: false,
    images: [],
  },
  {
    id: 2,
    text: "I am fine, thank you",
    isMe: true,
    images: [],
  },
  {
    id: 3,
    text: "How is your day going?",
    isMe: false,
    images: [],
  },
  {
    id: 4,
    text: "It is going well, thank you",
    isMe: true,
  },
];

const Messages = () => {
  const [message, setMessage] = React.useState("");
  const navigation = useNavigation();
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
          <Text style={styles.title}>Maria</Text>
        </View>

        <View style={[styles.header, { flexDirection: "row", gap: 13 }]}>
          <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/icons/cw.png")}
              contentFit="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../assets/icons/vw.png")}
              contentFit="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../assets/icons/optionw.png")}
              contentFit="contain"
            />
          </TouchableOpacity>
        </View>
        <AppLG />
      </View>

      <View style={[GlobalStyles.screenContainer, { flex: 1 }]}>
        <View style={{ flex: 1 }}>
          {texts.map((item) => (
            <View
              style={[
                GlobalStyles.horizontal,
                {
                  justifyContent: item.isMe ? "flex-end" : "flex-start",
                  marginVertical: 10,
                },
              ]}
              key={item.id}
            >
              <>
                {item.images && item.images.length > 0 && (
                  <View style={GlobalStyles.horizontal}>
                    {item.images.map((image, index) => (
                      <Image
                        key={index}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 10,
                          alignSelf: item.isMe ? "left" : "right",
                        }}
                        source={image}
                      />
                    ))}
                  </View>
                )}
                <View
                  style={[
                    styles.bg,
                    {
                      backgroundColor: item.isMe
                        ? COLORS.primary
                        : COLORS.bgCom,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: item.isMe ? COLORS.white : COLORS.font,
                      padding: 10,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
              </>
            </View>
          ))}
        </View>

        <View style={styles.absolute}>
          <View style={[GlobalStyles.horizontal, styles.thisone]}>
            <TouchableOpacity onPress={() => navigation.navigate("money")}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../../assets/icons/moneyc.png")}
                contentFit="contain"
              />
            </TouchableOpacity>
            <TextInput
              placeholder="type your message..."
              style={styles.input}
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
            <Image
              style={{ width: 24, height: 24, marginRight: 10 }}
              source={require("../../../assets/icons/attach.png")}
              contentFit="contain"
            />
            <Image
              contentFit="contain"
              style={{ width: 24, height: 24 }}
              source={require("../../../assets/icons/camera.png")}
            />
          </View>
          <View style={styles.sendVoice}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../../assets/icons/voicew.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 10,
    right: 20,
    left: 20,
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
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
    marginLeft: 15,
  },
  number: {
    fontFamily: FONTS.regular,
    color: COLORS.grey,
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
  },
  input: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  thisone: {
    backgroundColor: COLORS.bgCom,
    padding: 10,
    borderRadius: 50,
    flex: 1,
  },
  sendVoice: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 30,
    marginLeft: 12,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
