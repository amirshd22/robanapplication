import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import CompleteProfile from "../Screens/CompleteProfile";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false, headerBackTitle: "بازگشت" }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerTitle: "ورود",
          headerTitleAlign: "center",
          headerBackTitle: "بازگشت",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: "ثبت نام",
          headerTitleAlign: "center",
          headerBackTitle: "بازگشت",
        }}
      />
      <Stack.Screen
        name="completeProfile"
        component={CompleteProfile}
        options={{ headerTitle: "تکمیل پروفایل" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
