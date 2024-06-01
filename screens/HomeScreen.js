import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import NavFooter from "../components/NavFooter";
import MainNav from "../components/MainNav";
import Header from "../components/Header";

const mainNavItems = [
  {
    navDestination: "Kurs",
    buttonText: "Kurs",
    imagePath: "./../assets/images/kurs.jpg",
  },
  {
    navDestination: "Uebungen",
    buttonText: "Übungen",
    imagePath: "./../assets/images/uebungen.jpg",
  },
  {
    navDestination: "Meditationen",
    buttonText: "Meditationen",
    imagePath: "./../assets/images/meditationen.jpg",
  },
  {
    navDestination: "Notizen",
    buttonText: "Notizen",
    imagePath: "./../assets/images/notizen.jpg",
  },
  {
    navDestination: "Kalender",
    buttonText: "Kalender",
    imagePath: "./../assets/images/kalender.jpg",
  },
  {
    navDestination: "Einstellungen",
    buttonText: "Einstellungen",
  },
  {
    navDestination: "Registrieren",
    buttonText: "Registrieren",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header headerText="Schmerz ade!" isHome={true} />
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
    paddingVertical: 24,
  },
});
