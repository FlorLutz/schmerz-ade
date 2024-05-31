import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BackButton() {
  return (
    <View style={styles.backView}>
      <Text style={styles.backText} onPress={() => navigation.navigate("Home")}>
        zurück
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backView: {
    borderRadius: 20,
    backgroundColor: "#0c4a6e",
    width: "25%",
  },
  backText: {
    padding: 12,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#7dd3fc",
  },
});
