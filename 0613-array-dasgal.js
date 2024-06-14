// const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];


// // //////////////////////////////////////////////////////////////////////
// // //  1. Дээрх array доторх тоонуудын нийлбэрийг ол

// let total = 0;

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     const num = arrayOfNumbers[i];
//     total = total + arrayOfNumbers[i];
    
// } 
// console.log(total);

// // /////////////////////////////////////////////////////////////////////////

// // //  Дээрх аrray - ийн хамгийн их тоог ол.

// // Math.max(...arrayOfNumbers)
// // console.log(Math.max(...arrayOfNumbers));

//     findBigNum = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if ( arrayOfNumbers[i] > findBigNum ) {
//         findBigNum = arrayOfNumbers[i]
//         console.log(findBigNum);
//     } 
// }
// // ////////////////////////////////////////////////////////////////////////

// // //  Дээрх аrray - ийн хамгийн бага тоог ол.

// // Math.min(...arrayOfNumbers);
// // console.log(Math.min(...arrayOfNumbers));
       
//         findSmallNum = 0;
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         if ( arrayOfNumbers[i] < findSmallNum ) {
//             findSmallNum = arrayOfNumbers[i]
//             console.log(findSmallNum);
//         } 
//     }

// // /////////////////////////////////////////////////////////////////////////

// // //  Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.

// arrayOfNumbers.unshift("999")
// console.log(arrayOfNumbers);

// // //  Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.

// arrayOfNumbers.push(1981);
// console.log(arrayOfNumbers);

// // //  Дээрх array доторх тоонуудын тэгш болон сондгой 
// // //  тоо тус тус хэд байгааг ол.

//  let evenNum = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] % 2 === 0) {
//         evenNum++; 
//     }
// }
//     console.log("the sum of even numbers is:", evenNum); //ergej harah!!!!

// let oddNum = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] % 2 === 1) {
//         oddNum = arrayOfNumbers[i];
//         oddNum++
//     }
// }
//     console.log("the sum of odd numbers is:", oddNum);
// // ////////////////////////////////////////////////////////////////////////

// // // 2. studentAges гэсэн хувьсагч зарлаад 10, 20, 30, 
// // // 40, 50, 60, 70, 80, 90, 100 гэсэн утгуудыг оноож 
// // // тус array-д байгаа бүх тоог 5-аар нэмэгдүүл.

// const student = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
// addedNumber = [];

// for (let i = 0; i < student.length; i++) {
//     addedNumber = student[i] + 5;
//     console.log(addedNumber);
// }

// // 3. Ангийнхаа хамгийн урт нэртэй хүний нэрийг харуул.

// const classMates = [
// "anarchuluun", 
// "galt", 
// "maral", 
// "munkhzul", 
// "nyambaatar",
// "oyundari", 
// "temka", 
// "temuulen", 
// "tserennadmid", 
// "tugu", 
// "uran",
// "uuganbileg", 
// "uunu", 
// "zoljargal", 
// "miigaa", 
// "badral", 
// "batireedui",
// "batmunkh", 
// "delgermurun", 
// "temuujin", 
// "khangal", 
// "herlen", 
// "tserenbaatar",
// "munkhtsatsral", 
// "tsenguun"];
 
// let longestName = "";

//     for (let i = 0; i < classMates.length; i++) {
//         if (classMates[i].length > longestName.length) {
//             longestName = classMates[i];
//         }
//     }
    
// console.log("The longest name is: " + longestName);
    

//////////////////////////////////////////////////////////////////////

// 1. Fibonacci serries

// const n = 10;
// const a = [0, 1, 1, 2, 3, 5, 8];

// function Fibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// console.log(Fibonacci(20));

   
//////////////////////////////////////////////////////////////////

// 2. Paskaliin gurvaljin

// 1
// 11
// 123
// 1331
// 146641
// let n = 5;

//  function paskal(n) {
//     let pas = 0;
//     if (n === 0)  {
//         return res;
//         res.push([i]);   
//     }
//  } for (let i = 0; i < n.length; i++) {
//     let list = [];
//     for (let j = 0; j < res[i-1].length; j++) {
//         let sum = res[i-1][j-1] + res[i-1][j];
//         list.push(sum)  
//     }
//     list.push(i);
//     res.push([...list])
//     return res;
//  }

