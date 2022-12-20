import { inputTwo } from "./day2_input.js";

console.log("-----------Day 2------------");

const rockPaperScissores = (input) => {
  const arr = input.split(/(?:\n)/g);
  console.log(arr);

  let firstPlayerScore = 0;
  let secoundPlayerScore = 0;

  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const win = 6;
  const loss = 0;
  const draw = 3;
  //rock: A X
  //paper:  B Y
  //scissors: C Z
  arr.forEach((el) => {
    switch (el) {
      case "A X":
        firstPlayerScore += rock + draw;
        secoundPlayerScore += rock + draw;
        break;

      case "A Y":
        firstPlayerScore += rock + loss;
        secoundPlayerScore += paper + win;
        break;

      case "A Z":
        firstPlayerScore += rock + win;
        secoundPlayerScore += scissors + loss;
        break;

      case "B X":
        firstPlayerScore += paper + win;
        secoundPlayerScore += rock + loss;
        break;

      case "B Y":
        firstPlayerScore += paper + draw;
        secoundPlayerScore += paper + draw;
        break;

      case "B Z":
        firstPlayerScore += paper + loss;
        secoundPlayerScore += scissors + win;
        break;

      case "C X":
        firstPlayerScore += scissors + loss;
        secoundPlayerScore += rock + win;
        break;
      case "C Y":
        firstPlayerScore += scissors + win;
        secoundPlayerScore += paper + loss;
        break;
      case "C Z":
        firstPlayerScore += scissors + draw;
        secoundPlayerScore += scissors + draw;
        break;
    }
  });
  return secoundPlayerScore;
};

console.log(rockPaperScissores(inputTwo));
