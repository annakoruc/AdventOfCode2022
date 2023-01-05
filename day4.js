import { inputFour } from "./day4_input.js";

console.log("-----------Day 4------------");

const campCleanup = (input) => {
  let arr = input.split(/(?:\n)/g);
  let result = 0;
  console.log(arr);

  const elements = arr.map((el) => {
    const array = el.split(",");
    const firstAssignments = [];
    const secondAssignments = [];

    array.forEach((element) => {
      const elements = element.split("-");

      const [firstElement, secondElement] = elements;

      firstAssignments.push(firstElement);
      secondAssignments.push(secondElement);
    });

    if (
      (Number(firstAssignments[0]) <= Number(firstAssignments[1]) &&
        Number(secondAssignments[0]) >= Number(secondAssignments[1])) ||
      (Number(firstAssignments[0]) >= Number(firstAssignments[1]) &&
        Number(secondAssignments[0]) <= Number(secondAssignments[1]))
    ) {
      result = result + 1;
    }
  });
  return result;
};

console.log(campCleanup(inputFour));
