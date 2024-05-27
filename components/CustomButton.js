import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function CustomButton({ iconName, handlerFunction, text }) {
  return (
    <TouchableOpacity onPress={handlerFunction} style={styles.button}>
      {iconName ? (
        <FontAwesomeIcon icon={iconName} style={styles.content} />
      ) : (
        <Text style={styles.content}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: "#0c4a6e",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    alignSelf: "flex-start",
  },
  content: {
    color: "#7dd3fc",
  },
});
