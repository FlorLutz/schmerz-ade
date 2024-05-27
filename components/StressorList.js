import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function StressorList({
  stressors,
  toggleCrossOut,
  deleteItem,
}) {
  return (
    <View style={styles.stressorList}>
      {stressors.map((stressor) => (
        <View style={styles.stressorView}>
          <Text
            style={{
              paddingVertical: 12,
              paddingHorizontal: 18,
              fontSize: 18,
              width: "80%",
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
          <TouchableOpacity onPress={() => deleteItem(stressor.key)}>
            <FontAwesomeIcon icon={faTrashCan} style={styles.deleteIcon} />
          </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    marginTop: 12,
    backgroundColor: "#0c4a6e",
  },
  deleteIcon: {
    marginTop: 9,
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: "#7dd3fc",
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
