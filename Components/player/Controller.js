import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function Controller({ onNext, onPrv, play }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <MaterialIcons
          name="skip-previous"
          color={colors.secondary}
          size={45}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={play}>
        <MaterialIcons name="pause" color={colors.secondary} size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <MaterialIcons name="skip-next" color={colors.secondary} size={45} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
