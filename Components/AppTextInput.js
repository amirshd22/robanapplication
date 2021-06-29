import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import AppIcon from "./AppIcon";
import colors from "../config/colors";

function AppTextInput({
  placeholder,
  width = "100%",
  iconType,
  iconSize = 30,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        placeholderTextColor={colors.darkWhite}
        {...otherProps}
      />
      <AppIcon
        name={iconType}
        size={iconSize}
        backgroundColor={colors.primary}
        color={colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.input,
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginRight: 10,
    flex: 1,
    textAlign: "center",
    color: colors.secondary,
  },
});

export default AppTextInput;
