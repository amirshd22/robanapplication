import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import FormContainer from "./FormContainer";
import AppScreen from "../AppScreen";
import FormField from "./FormField";
import FormErrorMessage from "./FormErrorMessage";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";
import AppDatePickerField from "./AppDatePickerField";
import colors from "../../config/colors";
import { editTodo } from "../../services/todoService";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("You need a title").label("Title"),
  content: Yup.string().required("You need a title").label("Content"),
  when_to_finish: Yup.string().label("When_to_finish"),
});

export default function AppEditTodo({ item }) {
  const [error, setError] = useState("");
  const [actionFailed, setActionFailed] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async (values) => {
    const { data, ok, status } = await editTodo(values, item.id);
    if (!ok) {
      setActionFailed(true);
      setError("Something went wrong try again");
    }
    navigation.navigate("TodoList");
  };

  return (
    <AppScreen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
        <FormContainer
          validationSchema={validationSchema}
          initialValues={{
            title: item.title,
            content: item.content,
            when_to_finish: new Date(item.when_to_finish),
          }}
          onSubmit={handleSubmit}
        >
          <KeyboardAvoidingView style={styles.container}>
            <FormErrorMessage visible={actionFailed} error={error} />

            <View style={styles.inputContainer}>
              <FormField
                name="title"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="format-title"
                keyboardType="default"
                placeholder="عنوان"
              />
              <FormField
                name="content"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="table-of-contents"
                keyboardType="default"
                placeholder="توضیحات"
              />

              <AppDatePickerField title="وقت برانامه" name="when_to_finish" />
            </View>
            <View style={styles.btnContainer}>
              <SubmitButton
                title="ثبت تغییرات "
                color={colors.btnPurpleColor}
                textColor={colors.secondary}
              />
            </View>
          </KeyboardAvoidingView>
        </FormContainer>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputContainer: {
    padding: 20,
    width: "100%",
  },
  btnContainer: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
