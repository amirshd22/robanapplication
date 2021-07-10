import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function NotFoundComponent({ visible }) {
  if (!visible) return null;

  return (
    <LottieView
      source={require("../assets/animations/notFound.json")}
      autoPlay
      loop
      style={{
        zIndex: 4,
        padding: 25,
      }}
    />
  );
}

const styles = StyleSheet.create({});
