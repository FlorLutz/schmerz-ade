import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NavigationButton({
  navigation,
  buttonText,
  navDestination,
}) {
  return (
    <View style={styles.navButtonView}>
      <Text
        style={styles.navButtonText}
        onPress={() => navigation.navigate(navDestination)}
      >
        {buttonText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navButtonView: {
    borderRadius: 20,
    marginVertical: 6,
    backgroundColor: "#0c4a6e",
    width: "80%",
  },
  navButtonText: {
    padding: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#7dd3fc",
  },
});
