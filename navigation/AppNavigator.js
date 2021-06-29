import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import SettingsNavigator from "./settingsNavigator";
import AddFavoritsScreen from "../Screens/AddFavoritsScreen";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="addFavorites"
        component={AddFavoritsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size * 1.5}
              color={color}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
