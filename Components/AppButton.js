import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

export default function AppButton({ title, onPress, color, textColor, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: 18,
  },
});
