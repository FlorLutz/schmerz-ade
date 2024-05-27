import { StyleSheet, View, Text, ScrollView, Button } from "react-native";

import React, { useState } from "react";

export default function UebungenScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(true);
  function toggleShowInfo() {
    setShowInfo(!showInfo);
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
            onPress={() => navigation.navigate("Home")}
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
            Stress verursacht. Häufig sind wir im Alltag so beschäftigt, dass
            wir nur selten innehalten, um darüber nachzudenken. Hier hast Du nun
            die Gelegenheit, Dinge aufzuschreiben, von denen Du denkst, dass sie
            für Dich Stress verursachen. Das können schwierige familiäre
            Situationen, Ärger auf Arbeit, aber auch freudige Entwicklungen wie
            eine Befürderung oder eine bevorstehende Hochzeit sein. Stressoren
            können in der Vergangenheit liegen, ganz aktuell sein oder auch
            Zukunftsängste betreffen. Diese Liste ist ganz für Dich, zögere also
            nicht ganz offen mit Dir zu sein.
          </Text>
        ) : (
          <View>
            <Text>Hier entsteht die Übung</Text>
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
