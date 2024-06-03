import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

export default function NavButtonForGrid({
  navigation,
  buttonText,
  navDestination,
  imagePath,
  premium,
  opacity,
  upcoming,
}) {
  //WORK HERE ON CONDITIONAL IMAGES!
  // const image = imagePath ? imagePath : "./../assets/images/general.jpg";
  let image = require("./../assets/images/general.jpg");
  navDestination === "PositiveBotschaften" &&
    (image = require("./../assets/images/positiveBotschaften.jpg"));
  navDestination === "StressSammeln" &&
    (image = require("./../assets/images/stressSammeln.jpg"));
  navDestination === "StressAbschreiben" &&
    (image = require("./../assets/images/stressAbschreiben.jpg"));
  navDestination === "Uebungen" &&
    (image = require("./../assets/images/uebungen.jpg"));
  navDestination === "Kurs" && (image = require("./../assets/images/kurs.jpg"));
  navDestination === "Meditationen" &&
    (image = require("./../assets/images/meditationen.jpg"));
  navDestination === "WasTutMirGut" &&
    (image = require("./../assets/images/wald-familie.jpg"));
  navDestination === "Kalender" &&
    (image = require("./../assets/images/kalender.jpg"));
  navDestination === "Notizen" &&
    (image = require("./../assets/images/notizen.jpg"));
  navDestination === "Einstellungen" &&
    (image = require("./../assets/images/einstellungen.jpg"));
  navDestination === "Registrieren" &&
    (image = require("./../assets/images/registrieren.jpg"));
  navDestination === "WasIstApp" &&
    (image = require("./../assets/images/app.jpg"));

  console.log(image);

  // if (imagePath) {
  //   image = require(imagePath);
  // }
  return (
    <View
      style={[
        styles.navButtonView,
        //Bsp. für nicht verfügbare Elemente
        (premium || opacity || upcoming) && { opacity: 0.6 },
      ]}
    >
      <Pressable
        style={styles.navButtonPressable}
        onPress={() => navigation.navigate(navDestination)}
        disabled={premium || upcoming ? true : false}
      >
        <ImageBackground
          source={image}
          style={styles.navButtonBackground}
          // style={{ resizeMode: "stretch" }}
          resizeMode="cover"
        >
          {(premium || upcoming) && (
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "white",
                gap: 6,
                marginBottom: 60,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#0c4a6e",
                }}
              >
                {premium && "Nur in Premium verfügbar"}
                {upcoming && "Inhalt folgt"}
              </Text>
              <FontAwesomeIcon icon={faLock} style={{ color: "#0c4a6e" }} />
            </View>
          )}
          <Text style={styles.navButtonText}>{buttonText}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navButtonView: {
    flex: 1,
    borderRadius: 20,
    margin: 6,
    width: 200,
    height: 200,
    backgroundColor: "#0c4a6e",
    elevation: 4, //shadow on Android
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    //shadow on iOS:
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  navButtonPressable: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "#0c4a6e",
    borderWidth: 4,
  },
  navButtonBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  navButtonText: {
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#0c4a6e",
  },
});
