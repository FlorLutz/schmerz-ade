import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Header({ headerText, isHome }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headline}>{headerText}</Text>
      {isHome && (
        <Image
          source={require("./../assets/images/2-feathers-logo-flat.png")}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 16,
    width: "100%",
    // for darker footer
    // backgroundColor: "#0ea5e9",
  },
  headline: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0c4a6e",
  },
  image: {
    width: 100,
    height: 40,
  },
});
