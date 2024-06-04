import { View, Text } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

export default function BlockingBanner({ premium, upcoming }) {
  return (
    (premium || upcoming) && (
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
    )
  );
}
