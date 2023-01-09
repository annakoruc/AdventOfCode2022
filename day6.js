import { inputSix } from "./day6_input.js";

console.log("-----------Day 6------------");

const tuningTrouble = (input) => {
  let fourLetters = "";
  for (let i = 0; i <= input.length; i++) {
    let partOfString = input.slice(i, i + 4);

    let set = new Set(partOfString);

    if (set.size === 4) {
      fourLetters = Array.from(set).join("");
      break;
    }
  }
  const index = input.indexOf(fourLetters);

  return index + 4;
};

console.log(tuningTrouble(inputSix));
