import { Text, View, StyleSheet, Pressable } from "react-native";
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
        <View style={styles.stressorView} key={stressor.key}>
          <Pressable
            style={styles.messagePressable}
            disabled={toggleCrossOut ? false : true}
            onPress={() => toggleCrossOut(stressor.key)}
          >
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
            >
              {stressor.message}
            </Text>
          </Pressable>
          <Pressable onPress={() => deleteItem(stressor.key)}>
            <FontAwesomeIcon icon={faTrashCan} style={styles.deleteIcon} />
          </Pressable>
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
  messagePressable: {
    flex: 1,
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
