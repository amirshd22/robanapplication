import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormContainer from "./FormContainer";
import AppScreen from "../AppScreen";
import FormField from "./FormField";
import AppDatePickerField from "./AppDatePickerField";
import SubmitButton from "./SubmitButton";
import FormErrorMessage from "./FormErrorMessage";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import PickerField from "./PickerField";
import { getProfile, updateProfile } from "../../services/profileService";
import AppListInfo from "../lists/AppListInfo";
import ActivityIndicator from "../ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  gender: Yup.string().nullable().label("Gender"),
  lastName: Yup.string().min(3).label("Last Name"),
  city: Yup.string().min(3).label("City"),
  birth_day_date: Yup.string().label("Birth_date_day"),
});

const genders = [
  { label: "male", id: 1 },
  { label: "female", id: 2 },
  { label: "other", id: 3 },
];

export default function AppCompleteProfile() {
  const [error, setError] = useState("");
  const [actionFailed, setActionFailed] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    setLoading(true);
    const { data, status, ok } = await getProfile();
    setLoading(false);
    if (!ok) {
      setError("Something went wrong");
      setActionFailed(true);
    }
    setData(data);
  };

  const handleSubmit = async (values) => {
    const { status, data, ok } = await updateProfile(values);
    if (ok) {
      Alert.alert("انجام شد", "تغیرات شما با موقعیت ثبت شد", [
        { text: "ok", onPress: () => navigation.navigate("settings") },
      ]);
    } else {
      Alert.alert("خطا", "یه مشکلی وجود دارد دوباره تلاش کنید", [
        { text: "ok", onPress: () => navigation.navigate("settings") },
      ]);
    }
  };
  return (
    <AppScreen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
        <FormContainer
          validationSchema={validationSchema}
          initialValues={{
            name: !data.profile ? "" : data.profile.name,
            gender: !data.profile ? null : data.profile.gender,
            lastName: !data.profile ? "" : data.profile.lastName,
            city: !data.profile ? "" : data.profile.city,
            birth_day_date: !data.profile
              ? new Date()
              : new Date(data.profile.birth_day_date),
          }}
          onSubmit={handleSubmit}
        >
          <KeyboardAvoidingView style={styles.container}>
            <FormErrorMessage visible={actionFailed} error={error} />

            <View style={styles.inputContainer}>
              <FormField
                name="name"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="account"
                keyboardType="default"
                placeholder="نام"
              />
              <FormField
                name="lastName"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="account"
                keyboardType="default"
                placeholder="نام خانوادگی"
              />

              <PickerField
                name="gender"
                placeholder="جنسیت"
                items={genders}
                width="100%"
              />
              <FormField
                name="city"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="city"
                keyboardType="default"
                placeholder="شهر"
              />
              <AppDatePickerField name="birth_day_date" />
            </View>
            <View style={styles.btnContainer}>
              <SubmitButton
                title="ثبت تغییرات"
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
