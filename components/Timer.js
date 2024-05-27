import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { useState, useEffect } from "react";
// import Sound from "react-native-sound";

//add pause function and fix timer reset and restart (loop fires too often)

export default function Timer() {
  // button für timer start und wenn läuft auch für reset, zeitanzeige daneben, countdown, wenn timeout===0 klingelgeräusch wiedergeben oder vibration
  const [timerStarted, setTimerStarted] = useState(false);
  const [countdownSeconds, setCountdownSeconds] = useState(12 * 60);
  //   const [countDownStart, setCountDownStart] = useState();

  //   const sound = new Sound(
  //     require("./../android/app/src/main/res/raw/mixkit-bell-of-promise-930.wav")
  //   );

  let oneSecondTimeout;
  function subtractOneSecondLoop() {
    clearTimeout(oneSecondTimeout);
    if (countdownSeconds >= 0) {
      //   const newNumberOfSeconds = countdownSeconds - 1;
      setCountdownSeconds(
        (currentCountdownSeconds) => currentCountdownSeconds - 1
      );
      oneSecondTimeout = setTimeout(subtractOneSecondLoop, 1000);
      console.log(countdownSeconds);
    }
  }

  //   useEffect(() => {
  //     subtractOneSecondLoop();
  //   }, [countdownSeconds]);

  function ringAlert() {
    // sound.play((success) => {
    //   if (success) {
    //     console.log("Sound played successfully");
    //   } else {
    //     console.log("Error playing sound");
    //   }
    // });
  }

  function handleTimerToggle() {
    !timerStarted && subtractOneSecondLoop();
    timerStarted &&
      clearTimeout(oneSecondTimeout) &&
      setCountdownSeconds(12 * 60);
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
          <Text>{`Countdown: ${Math.floor(countdownSeconds / 60)}:${
            countdownSeconds % 60
          } to go`}</Text>
          {countdownSeconds === 0 && <Text>Countdown over</Text>}
          <CustomButton iconName={"x"} handlerFunction={handleTimerToggle} />
        </>
      )}
    </View>
  );
}
