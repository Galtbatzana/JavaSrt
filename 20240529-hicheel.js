// [1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1];

// const arr = [1, 2, 3, 4, 5];

// const newArr = [];

// for (i = 0; i < arr.length) {



// const arr = [12, 13, 4, 1, 0, -12];

// let minNum = arr[0];  // 12
// let maxNum = arr[0];
// for (i = 1; i < arr.length; i++) {

//     if (minNum > arr[i]) {  // hervee arr[i] ni hamgiin baga array mun bol minNum bolgono
//         // console.log()
//         //console.log(arr[i])
//         minNum = arr[i]     // arr[i] -g minimum VARIABLE(HUVISAGCH) bolgo!  
//         console.log(minNum)
//         if (maxNum < arr[i]) {
//             maxNum = arr[i]
//         }
//     }

// }


// const arr = [111, 2, 3, -111, -2, -44]; // hamgiin ihiig suuld ni gargah

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) { // arr[i]-111 bgaa ba hevree arr[i+1] ees ih bol tsaash ni hevlen\yawuulna
//         let maxNum = arr[i];    // arr[i] ni maxNum aa
//         arr[i] = arr[i + 1].   // maxNum buyu arr[i], arr[i+1] tei  bairiig soli ! (unen / true bol) 
//             arr[i + 1] = maxNum;   // arr[i+1] ni maxNum yum aa.

//     }

// } console.log(arr)



// const arr1 = [2, 4] // => [4,2];
// console.log(arr1);
// const temp = arr1[0];
// arr1[0] = arr1[1];
// arr1[1] = temp;
// console.log(arr1)


// const arr = [111, 2, 3, -111, -2, -44];

// for (let i = 0; i < arr.length; i++) {
//     for (let index = 0; index < arr.length - i; index++) {
//         if (arr[index] > arr[index + 1]) {
//             const temp = arr[index];
//             arr[index] = arr[index + 1];
//             arr[index + 1] = temp;
//         }
//     }
// }

// console.log(arr)
// const a = 2;
// const b = 3;
// let niilber = a + b
// let urjver = a * b
// let ylgavar = a - b
// let noogdvor = a / b
// console.log(niilber,urjver,ylgavar, noogdvor );

// function myFunction(a, b, c) {
//     niilber = a + b + c
//     urjver = a * b * c
//     ylgavar = a - b - c
//     noogdvor = a / b / c
//     let hariu =
//         `niilber: ${a} + ${b} = ${niilber}
//         urjver = ${urjver}
//         ylgavar = ${ylgavar}
//         noogdvor = ${noogdvor}`;

//     return hariu
// }
// console.log(myFunction(2,3,4))

// const arr = [12, 13, 4, 1, 0, -12];

// let minNum = arr[0];

// for (i = 1; i < arr.length; i++) {

//     if (minNum < arr[i]) {

//         minNum = arr[i]
//     }
// } console.log(minNum);