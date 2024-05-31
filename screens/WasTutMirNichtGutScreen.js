import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { wasTutMirNichtGutText } from "../lib/texts";
import Header from "../components/Header";
import StressorList from "../components/StressorList";
import InfoText from "../components/InfoText";

export default function WasTutMirNichtGutScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState();
  const [messages, setMessages] = useState([
    { message: "ständiger Lärm", key: 1 },
    { message: "keine Pausen", key: 2 },
    { message: "Multitasking", key: 3 },
  ]);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  function handleInputChange(enteredText) {
    setEnteredMessage(enteredText);
  }

  function handleSubmit() {
    if (enteredMessage.trim() === "") {
      setIsInvalidInput(true);
      this.textInput.clear();
    } else {
      const id = uuid();
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          key: id,
          message: enteredMessage,
        },
      ]);
      setIsInvalidInput(false);
      setEnteredMessage("");
      this.textInput.clear();
    }
  }

  function handleDeleteItem(id) {
    setMessages((currentMessages) => [
      ...currentMessages.filter((message) => message.key !== id),
    ]);
  }

  return (
    <View style={styles.container}>
      <Header headerText="Was tut mir gut?" />
      <ScrollView>
        {showInfo ? (
          <InfoText text={wasTutMirNichtGutText} />
        ) : (
          <View>
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.messageInput}
                  placeholder="Das tut mir nicht gut..."
                  onChangeText={handleInputChange}
                  ref={(input) => {
                    this.textInput = input;
                  }}
                />
                <View style={styles.addButton}>
                  <Text style={styles.buttonText} onPress={handleSubmit}>
                    +
                  </Text>
                </View>
              </View>
              {isInvalidInput && (
                <View>
                  <Text style={styles.invalidInputText}>
                    Das war eine ungültige Texteingabe.{"\n"}Bitte versuche es
                    noch einmal.
                  </Text>
                </View>
              )}
            </View>
            <StressorList stressors={messages} deleteItem={handleDeleteItem} />
          </View>
        )}
        <View style={styles.buttonView}>
          <Text style={styles.buttonText} onPress={toggleShowInfo}>
            {showInfo ? "Zur Übung" : "Infotext einblenden"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7dd3fc",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
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
  invalidInputText: {
    color: "red",
  },
  buttonView: {
    borderRadius: 20,
    marginTop: 12,
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
