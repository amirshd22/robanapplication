import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import UserContext from "../auth/context";
import AppButton from "../Components/AppButton";
import AppScreen from "../Components/AppScreen";
import colors from "../config/colors";
import authStorage from "../auth/storage";
import AppListInfo from "../Components/lists/AppListInfo";
import { server_url } from "../services/client";
import * as ImagePicker from "expo-image-picker";
import { updateProfilePic, getProfile } from "../services/profileService";
import ActivityIndicator from "../Components/ActivityIndicator";

const menuItems = [
  {
    title: "پروفایل",
    icon: { name: "account", backgroundColor: colors.secondary },
    targeScreen: "completeProfile",
  },
  {
    title: "پشتیبانی",
    icon: { name: "headphones", backgroundColor: colors.secondary },
    targeScreen: "aboutUs",
  },
  {
    title: "درباره ما",
    icon: { name: "head-question", backgroundColor: colors.secondary },
    targeScreen: "contactUs",
  },
];

export default function SettingsScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [error, setError] = useState("");

  const getProfileData = async () => {
    setLoading(true);
    const { data, status, ok } = await getProfile();
    setLoading(false);
    if (!ok) {
      setError("Something went wrong");
      setActionFailed(true);
    }
    setProfile(data);
  };

  const requestPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable Permissions to access library");
  };

  useEffect(() => {
    requestPermissions();
    getProfileData();
  }, []);

  const handleLogout = () => {
    Alert.alert("خروج", "آیا میخواهید خارج شوید ؟", [
      {
        text: "بلی",
        onPress: () => {
          authStorage.removeToken();
          setUser(null);
        },
      },
      { text: "خیر", onPress: () => console.log("done done") },
    ]);
  };

  const onChangeImage = async (image) => {
    const imageData = new FormData();
    imageData.append("profile_pic", image);
    const { ok, status, data } = await updateProfilePic(imageData);
    console.log(imageData);
  };

  const changeProfilePic = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading the image", error);
    }
  };

  return (
    <AppScreen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <View style={styles.imageContainer}>
        <AppListInfo
          image={`${server_url}${
            profile.profile ? profile.profile.profile_pic : null
          }`}
          title={user.username}
          subTitle={
            !user.name ? "پروفایل خود را در قسمت پروفایل کامل کنید" : user.name
          }
          style={{ borderRadius: 20, width: "100%" }}
          onPress={changeProfilePic}
          changeImage
        />
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={menuItems}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <AppListInfo
            title={item.title}
            iconType={item.icon.name}
            iconBackground={item.icon.backgroundColor}
            iconColor={colors.primary}
            onPress={() => navigation.navigate(item.targeScreen)}
            style={{ width: "100%", borderRadius: 5 }}
            touchable={true}
          />
        )}
      />
      <View style={{ width: "100%" }}>
        <AppListInfo
          title="خروج"
          iconType="logout"
          iconBackground={colors.secondary}
          iconColor={colors.primary}
          onPress={handleLogout}
          style={{ borderRadius: 5, width: "100%" }}
          touchable={true}
        />
      </View>
      {/* <AppButton
        title="خروج"
        color={colors.btnPurpleColor}
        textColor={colors.secondary}
        onPress={handleLogout}
      /> */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  imageContainer: {
    padding: 10,
    width: "100%",
  },
});
