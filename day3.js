import { inputThree } from "./day3_input.js";

console.log("-----------Day 3------------");

const rucksack = (input) => {
  let arr = input.split(/(?:\n)/g);
  let sum = 0;
  //   console.log(arr);

  arr.forEach((element) => {
    const oneElementLength = element.length / 2;

    const firstCompartment = element.slice(0, oneElementLength).split("");
    const secondCompartment = element.slice(oneElementLength).split("");
    let item;

    // console.log(`first ${firstCompartment}, second: ${secondCompartment}`);

    firstCompartment.forEach((el) => {
      if (secondCompartment.includes(el)) return (item = el);
    });

    // console.log("element", item);

    for (let i = 1; i <= 26; i++) {
      let alphabet = String.fromCharCode(i + 64);
      let lower = alphabet.toLowerCase();

      if (item === alphabet) {
        // console.log("litera", alphabet, "liczba", i + 26);
        return (sum = sum + (i + 26));
      }
      if (item === lower) {
        // console.log("litera", lower, "liczba", i);
        return (sum = sum + i);
      }
    }
  });
  return sum;
};

console.log(rucksack(inputThree));
