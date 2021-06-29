import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import FormContainer from "./FormContainer";
import AppScreen from "../AppScreen";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import FormErrorMessage from "./FormErrorMessage";
import colors from "../../config/colors";
import UserContext from "../../auth/context";
import authStorage from "../../auth/storage";
import authService from "../../services/authService";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(3).required().label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords don't match")
    .required()
    .label("Confirm password"),
});

const AppRegisterComponent = () => {
  const userContext = useContext(UserContext);
  const [registerFailed, setRegisterFailed] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async (values) => {
    const { data, status, ok } = await authService.register(values);

    if (status === 400) {
      setRegisterFailed(true);
      setError(data.detail[0]);
    } else {
      const user = jwtDecode(data.access);
      userContext.setUser(user);
      authStorage.storeToken(data.access);
      navigation.navigate("completeProfile");
    }
    console.log(data);
  };
  return (
    <AppScreen style={styles.screen}>
      <FormContainer
        validationSchema={validationSchema}
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        <KeyboardAvoidingView style={styles.container}>
          <FormErrorMessage visible={registerFailed} error={error} />
          <View style={styles.inputContainer}>
            <FormField
              name="username"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              iconType="account"
              keyboardType="email-address"
              placeholder="نام کاربری"
              textContentType="emailAddress"
            />
            <FormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              iconType="email"
              keyboardType="email-address"
              placeholder="پست الکترونیک"
              textContentType="emailAddress"
            />
            <FormField
              name="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              iconType="lock"
              placeholder="رمز عبور"
              textContentType="password"
            />
            <FormField
              name="confirmPassword"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              iconType="lock"
              placeholder="تکرار رمز عبور"
              textContentType="password"
            />
          </View>
          <View style={styles.btnContainer}>
            <SubmitButton
              title="ثبت نام"
              color={colors.btnPurpleColor}
              textColor={colors.secondary}
            />
          </View>
        </KeyboardAvoidingView>
      </FormContainer>
    </AppScreen>
  );
};

export default AppRegisterComponent;

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
    paddingLeft: 20,
    paddingRight: 10,
    width: "100%",
  },
  btnContainer: {
    padding: 20,
    width: "100%",
  },
});
