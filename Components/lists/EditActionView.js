import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppIcon from "../AppIcon";

export default function EditActionView({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name="circle-edit-outline"
        size={50}
        color={colors.secondary}
        backgroundColor={colors.warning}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.warning,
    width: 100,
    height: "100%",
  },
});
