import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const presetPositiveBotschaften = [
  { key: 1, botschaft: "Ich bin gesund." },
  { key: 2, botschaft: "Ich bin sicher." },
  { key: 3, botschaft: "Ich bin entspannt." },
];

export default function StressorList({ messages, deleteItem }) {
  return (
    <View style={styles.stressorList}>
      {presetPositiveBotschaften.map((message) => (
        <View style={styles.messageView} key={message.key}>
          <Text
            style={{
              paddingVertical: 12,
              paddingHorizontal: 18,
              fontSize: 18,
              width: "80%",
              color: "#7dd3fc",
            }}
          >
            {message.botschaft}
          </Text>
        </View>
      ))}
      {messages.map((message) => (
        <View style={styles.messageView} key={message.key}>
          <Text style={styles.messageText}>{message.botschaft}</Text>
          <TouchableOpacity onPress={() => deleteItem(message.key)}>
            <FontAwesomeIcon icon={faTrashCan} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stressorList: {
    marginBottom: 18,
  },
  messageView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    marginTop: 12,
    backgroundColor: "#0c4a6e",
  },
  deleteIcon: {
    marginTop: 9,
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: "#7dd3fc",
  },
  messageText: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 18,
    width: "80%",
    color: "#7dd3fc",
  },
});
