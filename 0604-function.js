// const print = () => {
//   let firstName = "Galt";
//   let LastName = "Batzana";
//   let space = "";
//   let fullName = LastName + space + firstName;

//   return fullName;
// };
// console.log(print());

// const myFunction = (numOne, numTwo) => {
//   let sum = numOne + numTwo;
//   return sum;
// };
// console.log(myFunction(10, 20));

// const sumArrayValues = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// };
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

// function sumAllNums() {
//   console.log(arguments);
// }
// sumAllNums(1, 2, 3, 4);

// function sumAllNums() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }
// console.log(sumAllNums(1, 2, 3, 4));

// const sumAllNums = (...args) => {
//   console.log(args);
// };

// sumAllNums(1, 2, 3, 4);

// Expression Function nergui function
// const square = function (n) {
//   return n * n;
// };

// console.log(square(2));

// Self Invoking Functions // uuriiguu duuddag function

// (function (n) {
//   console.log(n * n);
// })(2);

// let squaredNum = (function (n) {
//   return n * n;
// })(10);
// console.log(squaredNum);

// const square = (n) => {
//   return n * n;
// };

// const square = (n) => n * n;

// console.log(square(2));

// const changeToUppperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(changeToUppperCase(countries));

// const printFullName = (firstName, LastName) => `${firstName} ${LastName}`;
// console.log(printFullName("Galt", "Batzana"));

// function calculateAge(birthYear, currentYear) {
//   let age = currentYear - birthYear;
//   return age;
// }
// console.log("Age: ", calculateAge(1981, 2024));

// function myFunction(a, b) {
//   let total = a * b;
//   return total;
// }
// console.log(myFunction(5, 4));
