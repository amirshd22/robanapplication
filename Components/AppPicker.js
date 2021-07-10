import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppIcon from "./AppIcon";
import AppModel from "./AppModel";

function AppPicker({
  placeholder,
  width = "100%",
  items,
  onSelectItem,
  selectedItem,
  numOfColumns,
}) {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setShowModel(true)}>
        <View style={[styles.container, { width }]}>
          <AppIcon
            name="chevron-down"
            color={colors.secondary}
            backgroundColor={colors.primary}
          />
          <TextInput
            style={styles.textInput}
            defaultValue={selectedItem ? selectedItem : placeholder}
            editable={false}
          />
          <AppIcon
            name="gender-female"
            color={colors.secondary}
            backgroundColor={colors.primary}
          />
        </View>
      </TouchableOpacity>
      <AppModel
        numOfColumns={numOfColumns}
        items={items}
        visible={showModel}
        handleClose={() => setShowModel(false)}
        handleSelect={onSelectItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.input,
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginRight: 10,
    flex: 1,
    textAlign: "center",
    color: colors.secondary,
  },
});

export default AppPicker;
