import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function NavButtonForGrid({
  navigation,
  buttonText,
  navDestination,
  imagePath,
}) {
  //WORK HERE ON CONDITIONAL IMAGES!
  // const image = imagePath ? imagePath : "./../assets/images/general.jpg";
  var image = require("./../assets/images/general.jpg");
  console.log(imagePath);
  // if (imagePath) {
  //   image = require(imagePath);
  // }
  return (
    <View style={styles.navButtonView}>
      <Pressable
        style={styles.navButtonPressable}
        onPress={() => navigation.navigate(navDestination)}
      >
        <ImageBackground style={styles.navButtonBackground} source={image}>
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
    width: 100,
    height: 100,
    backgroundColor: "#0c4a6e",
    // maxWidth: "45%",
    // width: "100%",

    elevation: 4, //shadow on Android
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
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
  },
  navButtonBackground: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  navButtonText: {
    // alignSelf: "flex-end",

    backgroundColor: "white",
    // flex: 1,
    // padding: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#7dd3fc",
  },
});
