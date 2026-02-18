import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { wasIstAppText } from "../../lib/texts";
import Header from "../../components/Header";
import InfoText from "../../components/InfoText";

export default function WasIstAppScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headerText="Was ist die Schmerz-ade!-App?" />
      <ScrollView>
        <InfoText text={wasIstAppText} />
        <View style={styles.buttonView}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("IntroZuTMS")}
          >
            Lass uns beginnen
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
