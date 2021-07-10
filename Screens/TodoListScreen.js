import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, Alert, View } from "react-native";
import AppScreen from "../Components/AppScreen";
import { getTodo, deleteTodo, editTodo } from "../services/todoService";
import ActivityIndicator from "../Components/ActivityIndicator";
import AppListInfo from "../Components/lists/AppListInfo";
import DeleteActionView from "../Components/lists/DeleteActionView";
import NotFoundComponent from "../Components/NotFoundComponent";
import EditActionView from "../Components/lists/EditActionView";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function TodoListScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();

  const getAllTodo = async () => {
    setLoading(true);
    setNotFound(false);
    const { data, ok } = await getTodo();
    if (ok) {
      setData(data);
      setLoading(false);
      setNotFound(false);
      if (data.length <= 0) setNotFound(true);
    }
  };

  const deleteTodoAction = async (id) => {
    Alert.alert(`ایا مطمن هستید؟`, "", [
      {
        text: "بلی",
        onPress: async () => {
          const { ok, status, data } = await deleteTodo(id);
          if (!ok) {
            setError("Something went wrong");
          } else {
            setLoading(true);
            await getAllTodo();
            setLoading(false);
          }
        },
      },
      { text: "خیر" },
    ]);
  };

  const goToEditScreen = (item) => {
    navigation.navigate("editTodo", { item });
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <AppScreen style={styles.container}>
      <ActivityIndicator visible={loading} />
      {data.length <= 0 && <NotFoundComponent visible={notFound} />}
      <FlatList
        style={styles.todoContent}
        data={data}
        refreshing={refresh}
        onRefresh={getAllTodo}
        ItemSeparatorComponent={() => (
          <View style={{ height: 5, backgroundColor: colors.secondary }}></View>
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppListInfo
            title={item.title}
            subTitle={item.content}
            disabled
            style={{ height: 100 }}
            renderRightActions={() => (
              <DeleteActionView onPress={() => deleteTodoAction(item.id)} />
            )}
            renderLeftActions={() => (
              <EditActionView onPress={() => goToEditScreen(item)} />
            )}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoContent: {
    flex: 1,
  },
});
