import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "./theme";

export default StyleSheet.create({
  //auths
  header: {
    fontSize: 26,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: 5,
  },
  mediumHeader: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  highEndMedium: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    fontFamily: FONTS.light,
    color: COLORS.text,
  },
  subHeaderLight: {
    fontSize: 18,
    fontFamily: FONTS.light,
    color: COLORS.lightGray,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 70,
  },
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.bg,
  },
  screenContainerWP: {
    flex: 1,

    backgroundColor: COLORS.bg,
  },
  text: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: 14,
  },
  textGray: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: 14,
  },
  subText: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: 12,
  },

  h1: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 28,
  },
  h2: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 26,
  },
  h3: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: 24,
  },
  h4: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: 20,
  },
  h5: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: 18,
  },
  h6: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 16,
  },
  textColored: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 14,
  },
  linkText: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 14,
    textDecorationLine: "underline",
  },

  headerIcon: {
    width: 32,
    height: 32,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 25,
    marginRight: 10,
  },
  iconStandardContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  iconStandard: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.text,
    fontSize: 24,
    textAlign: "center",
  },
  parentContainer: {
    paddingTop: 50,
    flex: 1,
  },
  horizontalSB: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  lightGreyText: {
    color: COLORS.gray,
    fontFamily: FONTS.light,
    fontSize: 12,
  },
  image100: {
    width: 100,
    height: 100,
  },
  image100Container: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 50,
  },
  centerData: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerDataPaddingVertical: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  //margin Verticals
  m5v: {
    marginVertical: 5,
  },
  m10v: {
    marginVertical: 10,
  },
  m15v: {
    marginVertical: 15,
  },
  m20v: {
    marginVertical: 20,
  },
  boldTextPrimary: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
  },
});
