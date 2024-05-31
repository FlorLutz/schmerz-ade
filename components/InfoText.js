import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function InfoText({ text }) {
  return (
    <View>
      {text.map((paragraph, index) => (
        <Text key={index} style={styles.infoText}>
          {"   " + paragraph}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 18,
    marginBottom: 6,
  },
});
