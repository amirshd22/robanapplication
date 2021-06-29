import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Screens/SettingsScreen";
import CompleteProfile from "../Screens/CompleteProfile";
import AboutUsScreen from "../Screens/AboutUsScreen";
import ContactUs from "../Screens/ContactUs";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerTitle: "تنظیمات" }}
      />
      <Stack.Screen
        name="completeProfile"
        component={CompleteProfile}
        options={{ headerTitle: " پروفایل" }}
      />
      <Stack.Screen
        name="aboutUs"
        component={AboutUsScreen}
        options={{ headerTitle: " درباره ما" }}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactUs}
        options={{ headerTitle: "پشتیبانی" }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
