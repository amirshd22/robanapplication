import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppWidget from "../Components/AppWidget";
import { weatherIcon, todoIcon } from "../assets/allSvg";
import AppScreen from "../Components/AppScreen";

export default function AddFavoritsScreen() {
  return (
    <AppScreen style={styles.container}>
      <AppWidget title="todo" iconImage={todoIcon} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
