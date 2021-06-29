import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
export default function AppScreen({ children, style, circle = false }) {
  return (
    <SafeAreaView style={styles.screen}>
      {circle && <View style={styles.circle}></View>}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    position: "relative",
  },
  circle: {
    backgroundColor: colors.btnPurpleColor,
    width: "100%",
    position: "absolute",
    height: "100%",
    top: 0,
    left: "50%",
    borderRadius: Dimensions.get("window").width / 2,
    transform: [
      { translateX: -Dimensions.get("window").width / 2 },
      { translateY: -Dimensions.get("window").height / 1.7 },
    ],
    zIndex: -4,
  },
});
