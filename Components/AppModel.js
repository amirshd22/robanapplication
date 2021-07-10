import React from "react";
import { View, StyleSheet, Modal, FlatList, Button } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";

import AppScreen from "./AppScreen";
import PickerItem from "./PickerItem";

function AppModel({ items, visible, handleClose, handleSelect, numOfColumns }) {
  return (
    <Modal visible={visible} animationType="slide">
      <AppScreen style={styles.container}>
        <FlatList
          data={items}
          numColumns={numOfColumns && 2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                handleSelect(item.label);
                handleClose();
              }}
              svgItem={item.svgItem}
            />
          )}
        />
        <View style={{ padding: 15, width: "100%" }}>
          <AppButton
            title="Close"
            onPress={handleClose}
            color={colors.btnPurpleColor}
            textColor={colors.secondary}
            style={{ width: "100%" }}
          />
        </View>
      </AppScreen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AppModel;
