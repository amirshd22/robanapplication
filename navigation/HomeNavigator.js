import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MusicScreen from "../Screens/MusicScreen";
import TodoListScreen from "../Screens/TodoListScreen";
import TimerScreen from "../Screens/TimerScreen";

const Stack = createStackNavigator();

export default HomeNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="music"
      component={MusicScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TodoList"
      component={TodoListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Timer"
      component={TimerScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
