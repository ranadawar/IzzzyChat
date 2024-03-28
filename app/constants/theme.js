export const COLORS = {
  primary: "#246BFD",
  secondary: "#5089FF",
  lightPrimary: "#E1F5FE",
  lightBg: "#f3fefe",
  darkIcon: "#262626",
  font: "#212121",
  lightBorder: "#F3F3F3",
  darkBorder: "#E9E9E9",
  white: "#ffffff",
  grey: "#9E9E9E",
  danger: "#FF5252",
  fontLight: "#9CA3AF",
  fontDark: "#171725",
  textInputBackround: "#F6F6F6",
  textInputPlaceholder: "#9CA4AB",
  bgCom: "#FAFAFA",
};

export const SIZES = {
  base: 10,
  small: 12,
  graySmall: 11,
  font: 14,
  h4: 16,
  h3: 18,
  h2: 24,
  h1: 34,
};

export const FONTS = {
  bold: "EncodeSansBold",
  semiBold: "EncodeSansSemiBold",
  medium: "EncodeSansMedium",
  regular: "EncodeSansRegular",
  light: "EncodeSansLight",
  thin: "EncodeSansThin",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};
