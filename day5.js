import { inputFive, inputFiveArrays as arrays } from "./day5_input.js";

console.log("-----------Day 5------------");
console.log(arrays);

const suppylyStacks = (input) => {
  let startTime = performance.now();
  let actions = input.split(/(?:\n)/g);

  actions.forEach((element) => {
    const arr = element.match(/\d+/g);

    let howMuch = +arr[0];
    let fromWithCrates = +arr[1];
    let toWithCrates = +arr[2];

    let popElements = arrays[fromWithCrates].splice(-howMuch);

    popElements.reverse();
    arrays[toWithCrates].push(...popElements);
  });

  let result = [];

  Object.values(arrays).forEach((el) => {
    let lastItem = el[el.length - 1];
    result.push(lastItem);
  });
  let endTime = performance.now();
  console.log(`Call to suppylyStacks took ${endTime - startTime} milliseconds`);

  return result.join("");
};

console.log(suppylyStacks(inputFive));
