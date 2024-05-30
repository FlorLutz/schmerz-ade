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
import Timer from "../components/Timer";
import { stressAbschreibenText } from "../lib/texts";

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
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headline}>Stress abschreiben</Text>
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
          <Text style={styles.infoText}>{stressAbschreibenText}</Text>
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
