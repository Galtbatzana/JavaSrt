// 1. box uusgeh 6 shirheg
// 2. 1 button uusgeh
// 3. DOM barih
// 4. 6 - n color variable uusgeh
// 5. for zarlaj box uudiig ungutei bolgoh
// 6. shiftedElement variable uusgej, ehnii ungiig awah
// 7. awsan unguu pusheer oruulah
// 8. function hiij onclick - toi holboj ajildag bolgoh!

const boxes = document.getElementsByClassName("box");
const button = document.getElementsByTagName("button")[0];

const color = ["red", "blue", "yellow", "green", "black", "aqua"];

function changeColor() {
  const shiftedElement = color.shift();
  color.push(shiftedElement);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = color[i];
  }
}
button.onclick = changeColor();

setInterval(changeColor, 1000);
