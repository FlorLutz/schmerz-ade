import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MainNav from "../components/MainNav";
import NavFooter from "../components/NavFooter";

const mainNavItems = [
  {
    navDestination: "PositiveBotschaften",
    buttonText: "Positive Botschaften",
    imagePath: "./../assets/images/positiveBotschaften.jpg",
  },
  {
    navDestination: "StressSammeln",
    buttonText: "Stress sammeln",
    imagePath: "./../assets/images/stressSammeln.jpg",
  },
  {
    navDestination: "StressAbschreiben",
    buttonText: "Stress abschreiben",
    imagePath: "./../assets/images/stressAbschreiben.jpg",
  },
  {
    navDestination: "WeitereUebung2",
    buttonText: "Weitere Übung 2",
  },
];

export default function UebungenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headline}>Übungen</Text>
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
      <MainNav navigation={navigation} navItems={mainNavItems} />
      <NavFooter navigation={navigation} />
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
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 50,
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
});
