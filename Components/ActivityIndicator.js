import React from "react";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
      style={{
        zIndex: 4,
        padding: 25,
      }}
    />
  );
}
