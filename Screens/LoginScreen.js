import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoginComponent from "../Components/forms/AppLoginComponent";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <>
      <StatusBar style="light" />
      <AppLoginComponent />
    </>
  );
}

const styles = StyleSheet.create({});
