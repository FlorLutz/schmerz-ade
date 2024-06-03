import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import StressorList from "../../components/StressorList";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { stressSammelnText } from "../../lib/texts";
import Header from "../../components/Header";
import InfoText from "../../components/InfoText";
import InputWithAdd from "../../components/InputWithAdd";

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
          message: enteredStressor,
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
      <Header headerText="Stress erkennen" />
      <ScrollView>
        {showInfo ? (
          <InfoText text={stressSammelnText} />
        ) : (
          <View>
            <View>
              <InputWithAdd
                placeHolder="Schreib ein Stressthema"
                onInputChange={handleInputChange}
                onSubmit={handleStressorSubmit}
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
