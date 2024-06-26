import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

//add pause function and fix timer reset and restart (loop fires too often)

export default function Timer() {
  // button für timer start und wenn läuft auch für reset, zeitanzeige daneben, countdown, wenn timeout===0 klingelgeräusch wiedergeben oder vibration
  const [timerRunning, setTimerRunning] = useState(false);
  const [countdownSeconds, setCountdownSeconds] = useState(12 * 60);
  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState(12);
  const [oneSecondTimeout, setOneSecondTimeout] = useState(null);

  const [sound, setSound] = useState();

  useEffect(() => {
    if (timerRunning && !isPaused && countdownSeconds > 0) {
      const interval = setInterval(() => {
        setCountdownSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setOneSecondTimeout(interval);
      return () => clearInterval(interval);
    }
  }, [timerRunning, isPaused, countdownSeconds]);

  function playPauseToggle() {
    if (isPaused) {
      setIsPaused(false);
    } else {
      clearInterval(oneSecondTimeout);
      setIsPaused(true);
    }
  }

  function handleTimerToggle() {
    if (!timerRunning) {
      setCountdownSeconds(duration * 60);
      setIsPaused(false);
      setTimerRunning(true);
    } else {
      clearInterval(oneSecondTimeout);
      setTimerRunning(false);
      setCountdownSeconds(duration * 60);
      setIsPaused(true);
    }
  }

  function handleNumberChange(text) {
    setDuration(Number(text));
  }

  if (countdownSeconds === 0) {
    playSound();
    setDuration(inputValue);
    setTimerRunning(false);
  }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./../assets/audios/bell.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  //   function ringAlert() {
  // sound.play((success) => {
  //   if (success) {
  //     console.log("Sound played successfully");
  //   } else {
  //     console.log("Error playing sound");
  //   }
  // });
  //   }
  console.log("duration", duration);

  return (
    <View>
      {!timerRunning && (
        <View style={styles.durationPlayPauseCancelContainer}>
          <View style={styles.durationContainer}>
            <Text style={styles.timerHeadline}>Dauer in Minuten:</Text>
            <TextInput
              style={styles.timerDuration}
              keyboardType="numeric"
              onChangeText={handleNumberChange}
              // defaultValue={duration}
              value={`${duration}`}
              autFocus={true}
              maxLength={2}
            />
          </View>
          <CustomButton iconName={"play"} handlerFunction={handleTimerToggle} />
        </View>
      )}
      <View style={styles.durationPlayPauseCancelContainer}>
        {timerRunning && (
          <View style={styles.durationContainer}>
            <Text style={styles.infoMessage}>
              {countdownSeconds > 0 &&
                `verbleibend:\n${Math.floor(countdownSeconds / 60)}:${
                  countdownSeconds % 60 <= 9
                    ? "0" + (countdownSeconds % 60)
                    : countdownSeconds % 60
                }`}
            </Text>
            {countdownSeconds <= 0 && (
              <Text style={styles.infoMessage}>
                Zeit vorbei, durchatmen{"\n"}und löschen...{"\n"}
                Super gemacht!
              </Text>
            )}
          </View>
        )}
        {timerRunning && !isPaused && countdownSeconds > 0 && (
          <CustomButton iconName={"pause"} handlerFunction={playPauseToggle} />
        )}
        {timerRunning && isPaused && countdownSeconds > 0 && (
          <CustomButton iconName={"play"} handlerFunction={playPauseToggle} />
        )}
        {timerRunning && (
          <CustomButton iconName={"x"} handlerFunction={handleTimerToggle} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerHeadline: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0c4a6e",
    marginBottom: 12,
    alignSelf: "center",
  },
  timerDuration: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 18,
    width: 50,
    backgroundColor: "white",
  },
  durationPlayPauseCancelContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
    width: "100%",
  },
  durationContainer: {
    flexDirection: "row",
    gap: 12,
  },
  infoMessage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0c4a6e",
    marginBottom: 12,
  },
});
