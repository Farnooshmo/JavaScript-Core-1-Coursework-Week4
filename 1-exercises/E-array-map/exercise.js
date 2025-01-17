// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function numbersMultipliedByOneHundred(number) {
  return number * 100;
}

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred;
let numbersMultipliedByOneHundred = numbers.map(numbersMultipliedByOneHundred);

// or

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultipliedByOneHundred = numbers.map(
  function numbersMultipliedByOneHundred(number) {
    return number * 100;
  }
);

// or

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultipliedByOneHundred = numbers.map(function (number) {
  return number * 100;
});

//or

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultipliedByOneHundred = numbers.map((number) => {
  return number * 100;
});

//or

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultipliedByOneHundred = numbers.map((number) => number * 100);

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/