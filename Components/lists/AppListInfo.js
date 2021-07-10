import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";
import AppIcon from "../AppIcon";
import AppText from "../AppText";

function AppListInfo({
  image,
  title,
  subTitle,
  iconType,
  iconSize,
  iconColor,
  iconBackground,
  touchable,
  style,
  onPress,
  disabled = false,
  renderRightActions,
  renderLeftActions,
  changeImage,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableOpacity
        onPress={onPress}
        underlayColor={colors.secondary}
        disabled={disabled}
      >
        <View style={[styles.container, style]}>
          {image && <Image source={{ uri: image }} style={styles.image} />}

          {iconType && (
            <AppIcon
              name={iconType}
              size={iconSize}
              backgroundColor={iconBackground}
              color={iconColor}
            />
          )}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            {changeImage && (
              <AppText style={styles.changeImage}>تغییر عکس پروفایل</AppText>
            )}
          </View>
          {touchable && (
            <AppIcon
              name="chevron-right"
              size={30}
              backgroundColor={colors.input}
              color={colors.secondary}
            />
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.input,

    width: "100%",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: colors.darkWhite,
    borderWidth: 1,
  },
  detailsContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 10,
    textAlign: "center",
  },
  changeImage: {
    color: colors.secondary,
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontWeight: "300",
    letterSpacing: 4,
    color: colors.secondary,
    textAlign: "center",
  },
});

export default AppListInfo;
