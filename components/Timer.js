import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";
// import Sound from "react-native-sound";

export default function Timer() {
  // button für timer start und wenn läuft auch für reset, zeitanzeige daneben, countdown, wenn timeout===0 klingelgeräusch wiedergeben oder vibration
  const [timerStarted, setTimerStarted] = useState(false);
  const [countDownTime, setCountdownTime] = useState();
  const [countDownOver, setCountDownOver] = useState(false);
  const [countDownStart, setCountDownStart] = useState();

  //   const sound = new Sound(
  //     require("./../android/app/src/main/res/raw/mixkit-bell-of-promise-930.wav")
  //   );

  function getCountDownTimeInSeconds() {}

  function ringAlert() {
    // sound.play((success) => {
    //   if (success) {
    //     console.log("Sound played successfully");
    //   } else {
    //     console.log("Error playing sound");
    //   }
    // });
    setCountDownOver(true);
  }

  let ringTimeout;

  function startTimer() {
    const startTime = new Date();
    ringTimeout = setTimeout(ringAlert, 12 * 1000 * 60);
  }

  function handleTimerToggle() {
    !timerStarted && startTimer();
    timerStarted && clearTimeout(ringTimeout);
    setTimerStarted(!timerStarted);
    console.log("timer has started");
  }
  return (
    <View>
      <Text>Timer</Text>
      {!timerStarted && (
        <CustomButton
          iconName={"hourglass"}
          handlerFunction={handleTimerToggle}
        />
      )}
      {timerStarted && (
        <>
          <Text>Countdown</Text>
          {countDownOver && <Text>Countdown over</Text>}
          <CustomButton iconName={"x"} handlerFunction={handleTimerToggle} />
        </>
      )}
    </View>
  );
}
