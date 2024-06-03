import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import NavButton from "./NavButton";
import NavButtonForGrid from "./NavButtonForGrid";

export default function MainNav({ navigation, navItems }) {
  return (
    <FlatList
      data={navItems}
      keyExtractor={(navItem) => navItem.navDestination}
      renderItem={({ item }) => (
        <NavButtonForGrid
          buttonText={item.buttonText}
          navigation={navigation}
          navDestination={item.navDestination}
          imagePath={item.imagePath}
          premium={item.premium}
          opacity={item.opacity}
          upcoming={item.upcoming}
        />
      )}
      numColumns={2}
      style={styles.mainNavFlatList}
      contentContainerStyle={{ justifyContent: "space-between" }}
    />
  );
}

const styles = StyleSheet.create({
  mainNavFlatList: {
    flex: 1,
    width: "90%",
    // alignItems: "center",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // gap: 20,
    // height: "500",
  },
});
