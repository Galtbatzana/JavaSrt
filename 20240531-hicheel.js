// function cal(year) {
//   const salary = 600000;
//   const months = 11;
//   const interest = 18;

//   let acc = 0;

//   for (let i = 1; i <= year; i++) {
//     for (let i = 1; i <= months; i++) {
//       acc += salary; // acc = acc + salary
//     }

//     acc += (acc / 100) * interest; //acc=acc+(acc/100)*interest
//   }
//   console.log(acc.toFixed(2));
// }

// cal(2);

// ergej harah. uhaj oilgoh heregtei!!!!!!

// const balance = cal(1);

// function test(balance) {
//   let result = "";
//   console.log(balance);
//   console.log(parseInt(balance / arr[0]), "balance");
//   result += `20k  ${parseInt(balance / arr[0])}ш`;
//   console.log(result);
//   console.log(balance - 389 * arr[0]);
// }

// test(balance);

// const array = [12, 2, 3, 45, 6, 7];

// array.sort(function(a,b));
// araay.spile();

// const todo = [
//   "red",
//   "green",
//   "blue",
//   "red",
//   "green",
//   "blue",
//   "red",
//   "green",
//   "blue",
// ];

// const red = [];

// const green = [];

// const blue = [];

// todo.sort();
// //console.log(todo);

// todo.splice(0, 3);
// //console.log(todo);

// blue.splice(0, 3, "blue");
// console.log(blue);

// for (let i = 0; i < todo.length; i++) {
//     if () {
//         todo[i] ===
//     }

// }

const boxes = document.getElementsByClassName("box");
// console.log(boxes);

const btn = document.getElementsByTagName("button")[0];
const colors = ["red", "green", "blue", "black", "yellow"];

// eniig sain davtah olj sudlah

// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].style.background = colors[i];
// }

// suuliin ungiig hamgiin ehnii ungutei solih
// function uusgej hiigeed onclick hiihed ungu soligdoh

// ehnii ungiig awaad hairtsgand hiigeed
// daraa ni push. eer oruulah

function changeColor() {
  const shiftedElement = colors.shift();
  colors.push(shiftedElement);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
  }
}
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.background = colors[i];
}
btn.onclick = changeColor;
setInterval(changeColor, 1000);
