import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import PositiveBotschaftenList from "./../components/PositiveBotschaftenList";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

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
          stressor: enteredMessage,
          isCrossedOut: false,
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
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headline}>Positive Botschaften</Text>
        </View>
        <View style={styles.backView}>
          <Text
            style={styles.backText}
            onPress={() => navigation.navigate("Uebungen")}
          >
            zurück
          </Text>
        </View>
      </View>
      <ScrollView>
        {showInfo ? (
          <Text style={styles.infoText}>
            In dieser ersten Übung geht es darum, für Entspannung in unserem
            Unterbewusstsein zu sorgen. Im Kurs hast Du gelernt, wie
            selbstkritische und verzweifelnde Gedanken den Teufelskreis aus
            Furcht und Schmerz antreiben und befeuern. Ein Weg daraus
            auszubrechen, ist es, bewusst positive Botschaften an uns zu senden.
            Vielleicht fällt es Dir schwer, dies zu Beginn mit Überzeugung zu
            tun. Versuch macht klug. Probier es aus und schau, wie es sich für
            Dich anfühlt.{"\n"}
            Als kleine Inspiration habe ich in dieser Übung drei sehr kraftvolle
            Botschaften vorbereitet, die an den Wurzeln vieler ungesunder
            Einstellungen zu uns selbst ansetzen.{"\n"}
            "Ich bin gesund." - Besonders, wenn sich chronische Schmerzen und
            TMS-Symptome schon über Jahre erstrecken und in dieser Zeit in Dir
            viel Leid erzeugt haben, fällt es Dir sicher schwer, diesen Satz
            anzunehmen. Dr. Sarno wies oft daraufhin, dass TMS-Patienten geheilt
            seien. Sie müssten es nur selbst glauben und darum geht es hier. So
            lange Du Deinem Unterbewusstsein klar machst, dass Du Dir weiter
            große Sorgen, um bestimmte Symptome machst, weiß es, dass diese
            Symptome ihren Zweck erfüllen.{"\n"}
            "Ich bin sicher." - Die allermeisten Herausforderungen, Probleme und
            Traumata liegen in der Vergangenheit oder bestehen in angstvollen
            Zukunftsvisionen. Hier und in diesem Moment bist Du sicher. Lasse es
            Dich wissen!{"\n"}
            "Ich bin entspannt." - Im hektischen Alltag laufen wir im
            Automatikmodus und der ist häufig aus eigener Gewohnheit aufgedreht,
            leistungsmaximiert und von Reizüberflutung geprägt. Stress wird sehr
            individuell wahrgenommen und kann von Dir auch gemacht werden.
            Genauso kannst Du aber auch einen Zustand von Gelassenheit
            kultivieren.{"\n"}
            Diese drei Botschaften sind Vorschläge, die für viele Menschen gut
            funktionieren. Vielleicht möchtest Du aber auch selbst eigene
            positive Botschaften ergänzen? Wiederhole die positiven Botschaften
            regelmäßig nach eigener Vorliebe, leise oder laut und versuche auch
            daran zu denken, wenn Du vielleicht das nächste Mal stark unter
            Schmerzen leidest, nach einem unangenehmen Streit oder wenn Du von
            einem Termin zum nächsten rennst. Was machen diese positiven
            Botschaften mit Dir?
          </Text>
        ) : (
          <View>
            {/* refactoring!!! */}
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.messageInput}
                  placeholder="Schreib ein Stressthema"
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
            <PositiveBotschaftenList
              stressors={messages}
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 30,
    marginBottom: 36,
  },
  headline: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0c4a6e",
  },
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
  infoText: {
    fontSize: 18,
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
