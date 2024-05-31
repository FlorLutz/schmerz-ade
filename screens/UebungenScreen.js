import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MainNav from "../components/MainNav";
import NavFooter from "../components/NavFooter";
import Header from "../components/Header";

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
    // opacity: true,
  },
  {
    navDestination: "StressAbschreiben",
    buttonText: "Stress abschreiben",
    imagePath: "./../assets/images/stressAbschreiben.jpg",
    // opacity: true,
  },
  {
    navDestination: "WasTutMirGut",
    buttonText: "Was tut mir gut?",
    imagePath: "./../assets/images/wald-familie.jpg",
  },
  {
    navDestination: "WasTutMirNichtGut",
    buttonText: "Was tut mir nicht gut?",
  },
  {
    navDestination: "WeitereUebung2",
    buttonText: "Weitere Übung 2",
    premium: true,
  },
];

export default function UebungenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headerText="Übungen" />
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
});
