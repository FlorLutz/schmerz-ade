import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import PositiveBotschaftenList from "../../components/PositiveBotschaftenList";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { positiveBotschaftenText } from "../../lib/texts";
import Header from "../../components/Header";
import InfoText from "../../components/InfoText";
import InputWithAdd from "../../components/InputWithAdd";

export default function PositiveBotschaftenScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState();
  const [messages, setMessages] = useState([]);
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
          botschaft: enteredMessage,
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
      <Header headerText="Positive Botschaften" />
      <ScrollView>
        {showInfo ? (
          <InfoText text={positiveBotschaftenText} />
        ) : (
          <View>
            <View>
              <InputWithAdd
                placeHolder="Schreib Dir gut zu"
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
              {isInvalidInput && (
                <View>
                  <Text style={styles.invalidInputText}>
                    Das war eine ungültige Texteingabe.{"\n"}Bitte versuche es
                    noch einmal.
                  </Text>
                </View>
              )}
            </View>
            <PositiveBotschaftenList
              messages={messages}
              deleteItem={handleDeleteItem}
            />
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
