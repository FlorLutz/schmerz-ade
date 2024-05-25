import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headline}>Schmerz ade!</Text>
        {/* change image to actual logo later */}
        <Image source={require("./assets/icon.png")} style={styles.image} />
      </View>
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
