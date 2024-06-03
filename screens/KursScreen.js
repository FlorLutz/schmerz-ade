import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNav from "../components/MainNav";
import NavFooter from "../components/NavFooter";

const mainNavItems = [
  {
    navDestination: "WasIstApp",
    buttonText: "Was ist die Schmerz-ade!-App?",
    imagePath: "./../assets/images/app.jpg",
  },
  {
    navDestination: "IntroTMS",
    buttonText: "Einführung zu TMS",
  },
  {
    navDestination: "Phase1",
    buttonText: "Phase 1 - Verstehen",
  },
  {
    navDestination: "Phase2",
    buttonText: "Phase 2 - Verändern",
  },
  {
    navDestination: "Phase3",
    buttonText: "Phase 3 - Bewahren",
  },
];

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headline}>Kurs</Text>
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
});
