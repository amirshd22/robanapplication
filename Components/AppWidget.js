import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";

export default function AppWidget({ iconImage, title, onPress, selected }) {
  let selectedStyle = {};
  if (selected) {
    selectedStyle = {
      borderColor: colors.btnPurpleColor,
      borderWidth: 2,
    };
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selectedStyle]}
    >
      <SvgXml style={styles.image} xml={iconImage} />
      <Text style={{ color: colors.secondary, marginTop: 5 }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.input,
    width: 153,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 55,
    margin: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
