import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import KursScreen from "./screens/KursScreen";
import UebungenScreen from "./screens/UebungenScreen";
import NotizenScreen from "./screens/NotizenScreen";
import PositiveBotschaftenScreen from "./screens/uebungen/PositiveBotschaftenScreen";
import SymptomListeScreen from "./screens/uebungen/SymptomListeScreen";
import WiederspruecheFindenScreen from "./screens/uebungen/WiderspruecheFindenScreen";
import StressSammelnScreen from "./screens/uebungen/StressSammelnScreen";
import StressAbschreibenScreen from "./screens/uebungen/StressAbschreibenScreen";
import WasTutMirGutScreen from "./screens/uebungen/WasTutMirGutScreen";
import WasTutMirNichtGutScreen from "./screens/uebungen/WasTutMirNichtGutScreen";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";

library.add(fab, faTrashCan, faX, faPlay, faPause);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Kurs"
          component={KursScreen}
          options={{ title: "Kursinhalte" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Uebungen"
          component={UebungenScreen}
          options={{ title: "Übungen" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Notizen"
          component={NotizenScreen}
          options={{ title: "Notizen" }}
        ></Stack.Screen>
        <Stack.Screen
          name="PositiveBotschaften"
          component={PositiveBotschaftenScreen}
          options={{ title: "Positive Botschaften" }}
        ></Stack.Screen>
        <Stack.Screen
          name="SymptomListe"
          component={SymptomListeScreen}
          options={{ title: "Symptomliste" }}
        ></Stack.Screen>
        <Stack.Screen
          name="WiderspruecheFinden"
          component={WiederspruecheFindenScreen}
          options={{ title: "Widersprüche finden" }}
        ></Stack.Screen>
        <Stack.Screen
          name="StressSammeln"
          component={StressSammelnScreen}
          options={{ title: "Stress erkennen" }}
        ></Stack.Screen>
        <Stack.Screen
          name="StressAbschreiben"
          component={StressAbschreibenScreen}
          options={{ title: "Stress abschreiben" }}
        ></Stack.Screen>
        <Stack.Screen
          name="WasTutMirGut"
          component={WasTutMirGutScreen}
          options={{ title: "Was tut mir gut?" }}
        ></Stack.Screen>
        <Stack.Screen
          name="WasTutMirNichtGut"
          component={WasTutMirNichtGutScreen}
          options={{ title: "Was tut mir nicht gut?" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
