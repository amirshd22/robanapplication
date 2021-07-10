import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TodoListScreen from "../Screens/TodoListScreen";
import AddTodoScreen from "../Screens/AddTodoScreen";
import AppIcon from "../Components/AppIcon";
import colors from "../config/colors";
import EditTodoScreen from "../Screens/EditTodoScreen";
const Stack = createStackNavigator();

export default TodoNavigator = ({ navigation }) => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="TodoList"
      component={TodoListScreen}
      options={{
        headerRight: () => (
          <AppIcon
            name="plus"
            size={50}
            color={colors.secondary}
            backgroundColor={colors.primary}
            onPress={() => navigation.navigate("addTodo")}
          />
        ),
      }}
    />
    <Stack.Screen
      name="addTodo"
      component={AddTodoScreen}
      options={{
        headerBackTitle: "back",
        headerTitle: "",
      }}
    />
    <Stack.Screen
      name="editTodo"
      component={EditTodoScreen}
      options={{
        headerBackTitle: "back",
        headerTitle: "",
      }}
    />
  </Stack.Navigator>
);
