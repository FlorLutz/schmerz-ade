import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import NavFooter from "../components/NavFooter";
import MainNav from "../components/MainNav";

const mainNavItems = [
  {
    navDestination: "Kurs",
    buttonText: "Kurs",
  },
  {
    navDestination: "Uebungen",
    buttonText: "Übungen",
  },
  {
    navDestination: "Notizen",
    buttonText: "Notizen",
  },
  {
    navDestination: "Kalender",
    buttonText: "Kalender",
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
      <View style={styles.headerContainer}>
        <Text style={styles.headline}>Schmerz ade!</Text>
        {/* change image to actual logo later */}
        <Image source={require("../assets/icon.png")} style={styles.image} />
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
    paddingVertical: 24,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 24,
    marginBottom: 36,
  },
  headline: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0c4a6e",
  },
  image: {
    width: 50,
    height: 50,
  },
});
