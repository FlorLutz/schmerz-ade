import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import NavButton from "./NavButton";

export default function MainNav({ navigation, navItems }) {
  return (
    <ScrollView style={styles.mainNavScrollView}>
      <View style={styles.mainNavView}>
        {navItems.map((navItem) => (
          <NavButton
            key={navItem.navDestination}
            navigation={navigation}
            navDestination={navItem.navDestination}
            buttonText={navItem.buttonText}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainNavScrollView: {
    width: "80%",
  },
  mainNavView: {
    alignItems: "center",
  },
});
