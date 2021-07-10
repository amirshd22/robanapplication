import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import AppWidget from "../Components/AppWidget";
import AppScreen from "../Components/AppScreen";
import { getProfile, updateInterests } from "../services/profileService";
import AppButton from "../Components/AppButton";
import ActivityIndicator from "../Components/ActivityIndicator";
import {
  Scientific,
  business,
  love,
  religion,
  clothe,
  lifeStyle,
} from "../assets/favoritesSvg";
import colors from "../config/colors";

const favorites = [
  {
    id: "1",
    name: "Scientific",
    iconImage: Scientific,
  },
  {
    id: "2",
    name: "love",
    iconImage: love,
  },
  {
    id: "3",
    name: "religion",
    iconImage: religion,
  },
  {
    id: "4",
    name: "clothe",
    iconImage: clothe,
  },
  {
    id: "5",
    name: "business",
    iconImage: business,
  },
  {
    id: "6",
    name: "lifeStyle",
    iconImage: lifeStyle,
  },
];

export default function AddFavoritsScreen() {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();

  const getProfileData = async () => {
    setLoading(true);
    const { data, ok } = await getProfile();
    const value = data.profile.interests;

    if (ok) {
      // interests = value.map(({ name }) => name);
      setInterests(value.map(({ name }) => name));
      setLoading(false);
    } else {
      console.log("error");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleOnPress = (item) => {
    const extractedName = item.name;

    for (let i = 0; i <= interests.length; i++) {
      if (extractedName == interests[i]) {
        Alert.alert("آیا مطمن هستید؟", "آیا میخواهید حذف شود", [
          {
            text: "بلی",
            onPress: () => {
              setInterests(interests.filter((item) => item !== extractedName));
              Alert.alert("با موفقعیت حذف شد", "", [{ text: "ok" }]);
            },
          },
          { text: "خیر" },
        ]);
        break;
      } else {
        setInterests([...interests, extractedName]);
        setSelected(item);
      }
    }
  };

  const handleUpdate = async () => {
    const dataToSend = {
      name: interests,
    };
    const { data, ok, status } = await updateInterests(dataToSend);
    if (ok) {
      console.log(status, data);
      Alert.alert("با موفقیعت انجام شد", "", [
        { text: "ok", onPress: getProfileData },
      ]);
    }
  };
  console.log(interests);
  return (
    <AppScreen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <AppWidget
              title={item.name}
              iconImage={item.iconImage}
              onPress={() => handleOnPress(item)}
              selected={selected === item}
            />
          );
        }}
        numColumns={2}
      />
      <View style={{ width: "100%", padding: 15 }}>
        <AppButton
          title="ثبت تغییرات"
          color={colors.btnPurpleColor}
          textColor={colors.secondary}
          onPress={handleUpdate}
          style={{ width: "100%" }}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
