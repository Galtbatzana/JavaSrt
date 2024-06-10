// WHILE LOOP

// let dugaar = 0;
// while (dugaar < 100) {
//     console.log(dugaar+1, "i love u");
//     dugaar = dugaar + 1;
// }

// FOR LOOP
// for (variable; condition; update) {}

// for (let num = 0; num < 100; num++) {
//     if (num % 3 === 0) {
//         console.log(num, "you look cute today.")
//     } else { 
//         console.log(num, " i fancy u");
//     }

// }
//////////////////////////////////////////////////////
// 1. 0-с n  хүртэлх тооны нийлбэрийг ол. 

// let sum = 0;

// for (let i = 0; i < 20; i++) {
//     sum = sum + i;
//     console.log(sum)
// }
///////////////////////////////////////////////////////

// 2. 1-с 10 хүртэлх тоог хэвлэ.

// let num = 0;

// for (let num = 0; num < 10; num++) {
//     console.log(num + 1);
// } 

////////////////////////////////////////////////////

// daalgavar // 1-20 hurtleh toonii 2t huvaagdah toonuudiig hevle

// for (let i = 0; i < 20; i = i + 2) {
//     console.log(i)  
// } 

/////////////////////////////////////////////////////////////////

// 3. 1-20 хүртэлх тэгш тоонуудын нийлбэрийг ол.

// total = 0;  // total;

// for (let i = 0; i < 20; i++) {
//     if(i % 2 === 0) {
//        total = total + i;
//     }   
// } 
// console.log(total)

/////////////////////////////////////////////////////////////

// 4. 2-t huvaagdah toonuudiig urjvel 

// let sum1 = 0;
// let urjver = 1;
// for (let i = 0; i < 20; i = i + 2) {
//     console.log(i)
//     sum1 = sum1 + 1;
//     urjver = urjver * i;
// }

// LEFT & RIGHT //   
a = 8; // a ni 8 utgatai
a = a + 2 // a ni 10 gesen utgatai bolj bn 

////////////////////////////////////////////////////////

// 5 . 10-20 хүртэлх тэгш тоонуудын нийлбэрийг ол.

// let num1 = 0;
// let total = 0;

//  for (let num1 = 0; num1 < 20; num1++) {
//     if (num1 > 10 && num1 % 2 === 0) {
//         total = total + num1
//     }
//  }
// console.log(total)



const n = prompt('n too oruulna uu:');

const output = document.getElementById('output');

let sum = 0;
for (let i = 1; i <=n; i++) {
    sum = sum + i;
    sum += i;
    output.innerText += i + "\n";
}

output.innerText += "1 -c N toonii niilber: " + sum;



