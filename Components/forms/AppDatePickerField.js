import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import FormErrorMessage from "./FormErrorMessage";
import { useFormikContext } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../../config/colors";
import AppListInfo from "../lists/AppListInfo";

export default function AppDatePickerField({ name, title }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || values[name];
    setShow(Platform.OS === "ios");
    setFieldValue(name, currentDate);
  };

  return (
    <View style={styles.container}>
      <AppListInfo
        title={title}
        onPress={() => setShow(!show)}
        style={styles.btn}
      />
      {show && (
        <DateTimePicker
          value={values[name]}
          onChange={onChange}
          mode="date"
          display="default"
          maximumDate={new Date(2100, 10, 20)}
          textColor={colors.secondary}
        />
      )}

      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  datePickerStyle: {
    width: 250,
    color: colors.secondary,
    borderRadius: 15,
  },
  container: {
    // backgroundColor: colors.input,
    // borderRadius: 15,
    // flexDirection: "row",
    // padding: 15,
    // marginVertical: 10,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  btn: {
    borderRadius: 15,
    width: "100%",
    marginVertical: 5,
  },
});
