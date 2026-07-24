//Exercise 14

// do while loop

let number;

do {
  number = Number(prompt("Enter a number greater than 10:"));
} while (isNaN(number) || number <= 10);

console.log("Correct! You entered:", number);
