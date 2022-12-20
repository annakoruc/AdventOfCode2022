import { input } from "./day1_input.js";

console.log("-----------Day 1------------");

const calorieCounter = () => {
  const arr = input.split(/(?:\n)/g);
  const numArr = arr.map((el) => (el !== "" ? Number(el) : el));
  console.log("num", numArr);
  let calories = 0;
  let maxCalories = 0;
  numArr.forEach((el) =>
    el !== ""
      ? (calories = calories + el)
      : (maxCalories < calories ? (maxCalories = calories) : maxCalories,
        (calories = 0))
  );

  return maxCalories;
};

console.log(calorieCounter());
