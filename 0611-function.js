
// function sumOfNumbers(n, m) {
//     let sum = 0;
//     for (let i = n; i <= m; i++) {
//       sum = sum + i
//     } 
//     return sum;
// } 
// sumOfNumbers(3, 9);

// const sumOf3to9 = sumOfNumbers(3, 9);

//  console.log(sumOfNumbers(5, 10));

// alert(sumOf3to9);

// document.getElementById("output").innerText = sumOf3to9;

/////////////////////////////////////////////////////////////

// const a = 10;
// const b = 12;

// function sumOfTwoNumbers (a, b) {
//     const sum = a + b;
//     console.log(sum);
// }
// sumOfTwoNumbers(5, 10);

////////////////////////////////////////////////////////////////

function run() {
    const n = getNumberValueFromInput();
    const sum = sumOfNumbers(n);
    print(sum);
}

// garaas ugsun toonii niilberiig hevleh funtion hiine.
// sumOfNumbers() nertee function hiine
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i
    } 
    return sum;
}

// 1. DOM oor input ees orj irsen utgiig awch, inputString bolgoyo.
// 2. input ees orj irsen string-iig number bolgoyo 
// 3 .getNumberValueFromInput -iig function bolgoyo
function getNumberValueFromInput() {
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);
    return n;
}

// DOM -oor function-nii (sumOfNumbers(n) -iin hariug hevlene // 
function print(output) {
    document.getElementById("output").innerText = output;
}
