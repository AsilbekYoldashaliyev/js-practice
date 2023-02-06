// Instructions:
// 1. Create a variable named "output" and assign it an empty array
// 2. Create a for loop that starts at 1 and ends at 100
// 3. Within the for loop, use an if/else statement to check if the current number is a multiple of both 3 and 5
// 4. If the current number is a multiple of both 3 and 5, push "FizzBuzz" to the "output" array
// 5. Else if the current number is a multiple of 3, push "Fizz" to the "output" array
// 6. Else if the current number is a multiple of 5, push "Buzz" to the "output" array
// 7. Else push the current number to the "output" array
// 8. Create a function named "printOutput" that takes in no arguments and uses the "output" array to console.log each element
// 9. Call the "printOutput" function

// Note: You can use Ternary operator inside if/else statement for more concise and readable code.

/////////////////////////////////  FIZZBUZZ

// let output = [];

// for (let empty = 1; empty <= 100; empty++) {
//   if (empty % 3 === 0 && empty % 5 === 0) {
//     output.push("Fizzbuzz");
//   } else if (empty % 3 === 0) {
//     output.push("Fizz");
//   } else if (empty % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(empty);
//   }
// }

// const printOutput = () => {
//   console.log(output);
// };

// printOutput();

/////////////////////////////////////// HARFLAR

// let string = "world";

// let word = string.split("");

// let natija = [];

// for (let i = word.length - 1; i >= 0; i = i - 1) {
//   natija.push(word[i]);
// }

// console.log(natija.join(""));
// natija.join("");

//////////////////////////////////////// SO'ZLAR

// let string = "world hello creator am I";

// let word = string.split(" ");

// let natija = [];

// for (let i = word.length - 1; i >= 0; i = i - 1) {
//   natija.push(word[i]);
// }

// console.log(natija.join(" "));
// natija.join("");

///////////////////////////////////// HARFLAR

let string = "987654321";

let word = string.split("");

let natija = [];

for (let i = word.length - 1; i >= 0; i = i - 1) {
  natija.push(word[i]);
}

console.log(natija.join(" "));
natija.join("");