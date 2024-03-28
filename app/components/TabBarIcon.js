// CustomTabBarIcon.js
import React from "react";
import { SvgXml } from "react-native-svg";
import { COLORS } from "../constants/theme";

const TabBarIcon = ({ focused, icon }) => {
  const fill = focused ? COLORS.primary : COLORS.grey; // Change color based on tab focus
  return <SvgXml xml={icon} fill={fill} width="24" height="24" />;
};

export default TabBarIcon;
