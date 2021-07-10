import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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
import ProfileContext from "../../auth/context";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").label("Username"),
  password: Yup.string()
    .required("Password is required")
    .min(3)
    .label("Password"),
});

const AppLoginComponent = () => {
  const userContext = useContext(UserContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (values) => {
    const { status, data, ok } = await authService.login(values);
    console.log(status, "this is the status code");
    if (status === 401) {
      setLoginFailed(true);
      console.log("i am the best");
    }
    // setLoginFailed(false);
    try {
      const user = jwtDecode(data.access);
      userContext.setUser(user);
    } catch (error) {
      console.log(error);
    }
    authStorage.storeToken(data.access);
  };
  return (
    <AppScreen style={styles.screen}>
      <FormContainer
        validationSchema={validationSchema}
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <FormErrorMessage
            visible={loginFailed}
            error="User or Password is incorrect"
          />
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
              name="password"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              iconType="lock"
              placeholder="رمز عبور"
              textContentType="password"
            />
          </View>
          <View style={styles.btnContainer}>
            <SubmitButton
              title="ورود"
              color={colors.btnPurpleColor}
              textColor={colors.secondary}
            />
          </View>
          <View style={{ height: 50 }}></View>
        </KeyboardAvoidingView>
      </FormContainer>
    </AppScreen>
  );
};

export default AppLoginComponent;

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
