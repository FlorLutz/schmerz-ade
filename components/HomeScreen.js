import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headline}>Schmerz ade!</Text>
        {/* change image to actual logo later */}
        <Image source={require("../assets/icon.png")} style={styles.image} />
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Kurs")}
        >
          Kurs
        </Text>
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Uebungen")}
        >
          Übungen
        </Text>
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Notizen")}
        >
          Notizen
        </Text>
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Kalender")}
        >
          Kalender
        </Text>
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Einstellungen")}
        >
          Einstellungen
        </Text>
      </View>
      <View style={styles.navButtonView}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("Registrieren")}
        >
          Registrieren
        </Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text
            style={styles.navButtonsFooter}
            onPress={() => navigation.navigate("Spenden")}
          >
            Spenden
          </Text>
        </View>
        <View>
          <Text
            style={styles.navButtonsFooter}
            onPress={() => navigation.navigate("Website")}
          >
            Website
          </Text>
        </View>
        <View>
          <Text
            style={styles.navButtonsFooter}
            onPress={() => navigation.navigate("Impressum")}
          >
            Impressum
          </Text>
        </View>
        <View>
          <Text
            style={styles.navButtonsFooter}
            onPress={() => navigation.navigate("About")}
          >
            Über Schmerz ade
          </Text>
        </View>
        <View>
          <Text
            style={styles.navButtonsFooter}
            onPress={() => navigation.navigate("Hilfe")}
          >
            Hilfe
          </Text>
        </View>
      </View>
      {/* <Button
        title="go to profile page"
        onPress={() => navigation.navigate("Profile")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7dd3fc",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 24,
    marginBottom: 24,
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
  navButtonView: {
    borderRadius: 20,
    marginVertical: 6,
    backgroundColor: "#0c4a6e",
    width: "80%",
  },
  navButtonText: {
    padding: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#7dd3fc",
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  navButtonsFooter: {
    color: "#0c4a6e",
    fontWeight: "bold",
  },
});
