import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Timer from "../../components/Timer";
import { stressAbschreibenText } from "../../lib/texts";
import Header from "../../components/Header";
import InfoText from "../../components/InfoText";

export default function SressAbschreibenScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(true);

  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  function handleDeleteInput() {
    this.textInput.clear();
  }

  return (
    <View style={styles.container}>
      <Header headerText="Stress abschreiben" />
      <ScrollView>
        {showInfo ? (
          <InfoText text={stressAbschreibenText} />
        ) : (
          <View>
            <Timer />
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  multiline={true}
                  style={styles.stressInput}
                  placeholder="Schreib über ein für Dich als stressig empfundenes Thema"
                  ref={(input) => {
                    this.textInput = input;
                  }}
                />
                <View style={styles.deleteButton}>
                  <TouchableOpacity onPress={handleDeleteInput}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      style={styles.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
    justifyContent: "space-between",
    marginBottom: 12,
  },
  stressInput: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 18,
    width: "80%",
  },
  deleteButton: {
    borderRadius: 20,
    backgroundColor: "#0c4a6e",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    alignSelf: "flex-start",
  },
  deleteIcon: {
    width: "90%",
    color: "#7dd3fc",
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
