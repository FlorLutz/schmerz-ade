import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import StressorList from "../components/StressorList";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export default function StressSammelnScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(true);
  const [enteredStressor, setEnteredStressor] = useState();
  const [stressors, setStressors] = useState([]);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  function handleInputChange(enteredText) {
    setEnteredStressor(enteredText);
  }

  function handleStressorSubmit() {
    if (enteredStressor.trim() === "") {
      setIsInvalidInput(true);
      this.textInput.clear();
    } else {
      const id = uuid();
      setStressors((currentStressors) => [
        {
          key: id,
          stressor: enteredStressor,
          isCrossedOut: false,
        },
        ...currentStressors,
      ]);
      setIsInvalidInput(false);
      setEnteredStressor("");
      this.textInput.clear();
    }
  }

  function toggleCrossOut(id) {
    setStressors((currentStressors) => [
      ...currentStressors.map((stressor) =>
        stressor.key !== id
          ? stressor
          : { ...stressor, isCrossedOut: !stressor.isCrossedOut }
      ),
    ]);
  }

  function handleDeleteItem(id) {
    setStressors((currentStressors) => [
      ...currentStressors.filter((stressor) => stressor.key !== id),
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headline}>Stress sammeln</Text>
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
            Wie Du nun schon weißt, können sich Stress und damit negative
            unterdrückte Gefühle mit der Zeit aufbauen und dann zu unangenehmen
            TMS-Symptomen führen. Lasst uns nun also ergründen, wie wir den
            Druck auf unser System ein wenig ablassen können. Dazu sollten wir
            uns zu allererst einmal bewusst machen, was in unserem Leben aktuell
            Stress verursacht.{"\n"}
            Häufig sind wir im Alltag so beschäftigt, dass wir nur selten
            innehalten, um darüber nachzudenken. Hier hast Du nun die
            Gelegenheit, Dinge aufzuschreiben, von denen Du denkst, dass sie für
            Dich Stress verursachen. Das können schwierige familiäre
            Situationen, Ärger auf Arbeit, aber auch freudige Entwicklungen wie
            eine Befürderung oder eine bevorstehende Hochzeit sein. Stressoren
            können in der Vergangenheit liegen, ganz aktuell sein oder auch
            Zukunftsängste betreffen.{"\n"}
            Wie detailiert Du vorgehst entscheidest Du selbst. Wichtig ist, dass
            Du mit den Schlagwörtern etwas anfangen kannst. Diese Liste ist ganz
            für Dich, zögere also nicht ganz offen mit Dir zu sein. Es handelt
            sich außerdem um eine offene Liste. Wann immer Dir neue Themen
            einfallen, schreibe sie dazu. Nachdem Du die nächste Übung "Stess
            abschreiben" begonnen hast, kannst Du hier zurückkommen und
            bearbeitete Themen aus der Liste streichen.
          </Text>
        ) : (
          <View>
            {/* refactoring!!! */}
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.stressInput}
                  placeholder="Schreib ein Stressthema"
                  onChangeText={handleInputChange}
                  ref={(input) => {
                    this.textInput = input;
                  }}
                />
                <View style={styles.addButton}>
                  <Text
                    style={styles.buttonText}
                    onPress={handleStressorSubmit}
                  >
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
            <StressorList
              stressors={stressors}
              toggleCrossOut={toggleCrossOut}
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
  stressInput: {
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
