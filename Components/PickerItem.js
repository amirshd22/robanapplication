import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import AppWidget from "./AppWidget";
function PickerItem({ label, onPress, svgItem }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {svgItem && (
          <AppWidget iconImage={svgItem} title="" onPress={onPress} />
        )}
        {!svgItem && (
          <AppText style={{ color: colors.secondary }}>{label}</AppText>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default PickerItem;
