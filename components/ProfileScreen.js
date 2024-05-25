import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headline}>Profile Page</Text>
        {/* change image to actual logo later */}
        <Image source={require("../assets/icon.png")} style={styles.image} />
      </View>
      <Button
        title="go to home page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
  },
  headline: {
    fontSize: 34,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});
