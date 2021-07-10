import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MusicScreen from "../Screens/MusicScreen";
import TimerScreen from "../Screens/TimerScreen";
import AppIcon from "../Components/AppIcon";
import colors from "../config/colors";
import TodoNavigator from "./TodoNavigator";
const Stack = createStackNavigator();

export default HomeNavigator = ({ navigation }) => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="music"
      component={MusicScreen}
      options={{
        headerShown: Platform.OS == "ios" ? false : true,
        headerTitle: "",
      }}
    />
    <Stack.Screen
      name="TodoList"
      component={TodoNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
