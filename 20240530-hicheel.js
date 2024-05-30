// const arr = [111, 2, 3, -111, -2, -44];

// numberMax = arr[0];

// for (let i = 1; i < arr.length; i++) {

//     if (arr[i] > numberMax) {
//         numberMax = arr[i]
//     }

// } console.log(numberMax);

// const arr = [111, 2, 3, -111, -2, -44];
// //console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         const temp = arr[i]; // ih too temp hadaglagdaj bn
//         arr[i] = arr[i + 1]; // arr[i+1] -iig arr[i] solih uuldel
//         arr[i + 1] = temp;
//     }
// }

// const arr = [111, 2, 3, -111, -2, -44];
// for (let i = 0; i < arr.length; i++) {
//     for (let index = 0; index < arr.length - i; index++) { // olon davtalgiig bagasgaj baigaa tomyo
//         console.log(arr[i]);
//         // if (arr[index] > arr[index + 1]) {
//         //     const temp = arr[index];
//         //     arr[index] = arr[index + 1];
//         //     arr[index + 1] = temp;
//         // }
//     }
// }
// console.log(arr)

// const numbers = [2, 3, 4, 5, 6]

// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i]
// } console.log(total)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let total = 0;

// for (let index = 0; index < array.length; index++) {

//     total = total + array[index]
//     if (index == 4) {
//         break
//     }
// } console.log(total)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // arr.odd = [1,3,5,7,9];  arr.even[2,4,6,8,10]
// let arrOdd = [];
// let arrEven = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arrEven.push(arr[i])
//         //console.log(arrEven)

//         // if (arr[i] % 2 !== 0) {
//         //     arrOdd.push(arr[i])
//         //     //console.log(arrOdd)
//     } else {
//         arrOdd.push(arr[i]);  // aldaa
//     }
// }
// const result = odd.concat(even)
// console.log(result);

// 1.hadgalmj huvisagch uusgeh
// 2.jild 2 udaa 300.000 tugrug
// 3. nerniihee urtaar huu bodoh
// 4. 12 jild

// 1 jild = 600 000
// 12 jild = 600 000 * 12 = 7 200 000
// jild 4% huu bodno

// const year = 11;  //12
// const salary = 600000;
// const interest = (year + salary) * 0.4;

// let saving = [];

// function myFunction() {
//     saving = salary * year
// } console.log(saving)

// function cal(year) {
//     const amount = 600000;
//     const sar = 11;
//     const fee = 18;

//     let account = 0;

//     for (let i = 1; i <= year; i++) {
//         for (let i = 1; i <= sar; i++) {
//             account += amount;
//         }

//         account += (account / 100) * fee;
//     }
//     console.log(account.toFixed(2));
// }
// cal(1)

// 7 788 000/20 000 = 389 // 7 780 000
// 8 000 / 5 000
// 3 000 / 1 000

// const arr = [20000, 10000, 5000, 1000, 500, 100, 50,20,10]

// const balance = cal(1);

// function test(balance) {
//   let result = ""
//   console.log(balance);
//   console.log(parseInt(balance / arr[0]),'balance');
//   result += `20k  ${parseInt(balance / arr[0])}ш`
//   console.log(result)
//   console.log(balance - (389 * arr[0]))
// }

// test(balance)

const num = [1, 2];
