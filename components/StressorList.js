import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function StressorList({ stressors, toggleCrossOut }) {
  return (
    <View style={styles.stressorList}>
      {stressors.map((stressor) => (
        <View style={styles.stressorView}>
          <Text
            style={{
              paddingVertical: 12,
              paddingHorizontal: 18,
              fontSize: 18,
              color: "#7dd3fc",
              textDecorationLine: stressor.isCrossedOut
                ? "line-through"
                : "none",
            }}
            key={stressor.key}
            onPress={() => toggleCrossOut(stressor.key)}
          >
            {stressor.stressor}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stressorList: {
    marginBottom: 18,
  },
  stressorView: {
    borderRadius: 20,
    marginTop: 12,
    backgroundColor: "#0c4a6e",
  },
  //   stressorText: {
  //     paddingVertical: 12,
  //     paddingHorizontal: 18,
  //     fontSize: 18,
  //     color: "#7dd3fc",
  //     // textAlign: "center",
  //     // fontWeight: "bold",
  //     // textDecorationLine: "line-through",
  //   },
});
