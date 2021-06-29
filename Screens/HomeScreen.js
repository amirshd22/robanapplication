import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppScreen from "../Components/AppScreen";
import AppWidget from "../Components/AppWidget";
import { todoIcon, time, music, turnOnOffBtn } from "../assets/allSvg";

const menu = [
  {
    title: "music",
    iconSvg: music,
    targeScreen: "music",
  },
  {
    title: "time",
    iconSvg: time,
    targeScreen: "Timer",
  },
  {
    title: "todo list",
    iconSvg: todoIcon,
    targeScreen: "TodoList",
  },
  {
    title: "Power button",
    iconSvg: turnOnOffBtn,
    targeScreen: "powerButton",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text>Menu</Text>
      </View>
      <View style={styles.iconContainer}>
        <FlatList
          style={{}}
          data={menu}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <AppWidget
              title={item.title}
              iconImage={item.iconSvg}
              onPress={() => navigation.navigate(item.targeScreen)}
            />
          )}
          numColumns={2}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
