import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import NavButton from "./NavButton";
import NavButtonForGrid from "./NavButtonForGrid";

export default function MainNav({ navigation, navItems }) {
  return (
    // <View style={styles.mainNavView}>
    <FlatList
      data={navItems}
      keyExtractor={(navItem) => navItem.navDestination}
      renderItem={({ item }) => (
        <NavButtonForGrid
          buttonText={item.buttonText}
          navigation={navigation}
          navDestination={item.navDestination}
          imagePath={item.imagePath}
        />
      )}
      numColumns={2}
      style={styles.mainNavScrollView}
      contentContainerStyle={{ justifyContent: "space-between" }}
      // horizontal={true}
      // contentContainerStyle={{ height: 300, flexWrap: "wrap" }}
    >
      {/* {navItems.map((navItem) => (
        <NavButtonForGrid
          key={navItem.navDestination}
          navigation={navigation}
          navDestination={navItem.navDestination}
          buttonText={navItem.buttonText}
        />
      ))} */}
    </FlatList>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainNavScrollView: {
    flex: 1,
    width: "80%",
    // alignItems: "center",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // gap: 20,
    // height: "500",
  },
  // mainNavView: {
  // },
});
