import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppEditTodo from "../Components/forms/AppEdtiTodo";

export default function EditTodoScreen({ route }) {
  const { item } = route.params;
  return <AppEditTodo item={item} />;
}

const styles = StyleSheet.create({});
