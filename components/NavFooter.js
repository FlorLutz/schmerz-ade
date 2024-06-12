import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NavFooter({ navigation }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 24,
    width: "100%",
    position: "static",
    // paddingBottom: 12,
    bottom: 12,
    // backgroundColor: "#0ea5e9",
  },
  navButtonsFooter: {
    color: "#0c4a6e",
    fontWeight: "bold",
  },
});
