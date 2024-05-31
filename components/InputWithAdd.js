import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputWithAdd({ onInputChange, onSubmit, placeHolder }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.messageInput}
        placeholder={placeHolder}
        onChangeText={onInputChange}
        ref={(input) => {
          this.textInput = input;
        }}
      />
      <View style={styles.addButton}>
        <Text style={styles.buttonText} onPress={onSubmit}>
          +
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    marginBottom: 12,
  },
  messageInput: {
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 18,
    width: "70%",
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: "#0c4a6e",
    alignSelf: "center",
  },
  buttonText: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#7dd3fc",
  },
});
