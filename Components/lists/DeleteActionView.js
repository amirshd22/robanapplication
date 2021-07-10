import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppIcon from "../AppIcon";

export default function DeleteActionView({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name="trash-can-outline"
        size={50}
        color={colors.secondary}
        backgroundColor={colors.red}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    width: 100,
    height: "100%",
  },
});
