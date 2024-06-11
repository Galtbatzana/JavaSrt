// const week = "Даваа";
// const week = "Мягмар";
// const week = "Лхавга";
// const week = "Пүрэв";
// const week = "Баасан";
// const week = "Бямба";
// const week = "Ням";

// "Таны оруулсан утга алдаатай байна";

// let week = 8;

// if (week > 0 && week < 2) {
//   let week = "Даваа";
//   console.log(week);
// } else  if (week > 1 && week < 3) {
//   let week = "Мягмар";
//   console.log(week);
// }
// else if (week > 2 && week < 4) {
//   let week = "Лхавга";
//   console.log(week);
// }
// else if (week > 3 && week < 5) {
//   let week = "Пүрэв";
//   console.log(week);
// }
// else if (week > 4 && week < 6) {
//     let week = "Баасан";
//     console.log(week);
// }
// else if (week > 5 && week < 7) {
//     let week = "Бямба";
//     console.log(week);
// }
// else if (week > 6 && week < 8) {
//         let week = "Ням";
//         console.log(week);
// } else {
//         let week = "Таны оруулсан утга алдаатай байна";
//         console.log(week);
//       }

//////////////////////////////////////////////////////////

// let day = 2;
// if (day == 1) {
//   console.log('Monday');
// } else if (day == 2) {
//   console.log('Tuesday')
// } else {
//   let day = "Таны оруулсан утга алдаатай байна";
//         console.log(day);
// }

/////////////////////////////////////////////////////////////

// 2. Гараас дүнгээ оруулах үед (1-100-ийн хооронд)
// тохирох үсгэн үнэлгээг буцаа. /A,B,C,D,F/

// let num = 27;

// if (num == 1) {
//   let num = "A";
//   console.log(num);
// } else if (num == 2) {
//   let num = "B";
//   console.log(num);
// } else if (num == 3) {
//   let num = "C";
//   console.log(num);
// } else if (num == 4) {
//   let num = "D";
//   console.log(num);
// } else if (num == 5) {
//   let num = "E";
//   console.log(num);
// } else if (num == 6) {
//   let num = "F";
//   console.log(num);
// } else if (num == 7) {
//   let num = "G";
//   console.log(num);
// } else if (num == 8) {
//   let num = "H";
//   console.log(num);
// } else if (num == 9) {
//   let num = "I";
//   console.log(num);
// } else if (num == 10) {
//   let num = "J";
//   console.log(num);
// } else if (num == 11) {
//   let num = "K";
//   console.log(num);
// } else if (num == 12) {
//   let num = "L";
//   console.log(num);
// } else if (num == 13) {
//   let num = "M";
//   console.log(num);
// } else if (num == 14) {
//   let num = "N";
//   console.log(num);
// } else if (num == 15) {
//   let num = "O";
//   console.log(num);
// } else if (num == 16) {
//   let num = "P";
//   console.log(num);
// } else if (num == 17) {
//   let num = "Q";
//   console.log(num);
// } else if (num == 18) {
//   let num = "R";
//   console.log(num);
// } else if (num == 19) {
//   let num = "S";
//   console.log(num);
// } else if (num == 20) {
//   let num = "T";
//   console.log(num);
// } else if (num == 21) {
//   let num = "U";
//   console.log(num);
// } else if (num == 22) {
//   let num = "V";
//   console.log(num);
// } else if (num == 23) {
//   let num = "W";
//   console.log(num);
// } else if (num == 24) {
//   let num = "X";
//   console.log(num);
// } else if (num == 25) {
//   let num = "Y";
//   console.log(num);
// } else if (num == 26) {
//   let num = "Z";
//   console.log(num);
// } else { num = "Error! Try again!"
//   console.log(num);
// }

////////////////////////////////////////////////////////////

// 3. Хэрэв гараас оруулсан username нь 'admin' байвал 'Hello, Admin!',
//  өөр username байх тохиолдолд 'Hello, ...!' цэгийн оронд
//  тухайн хэрэглэгчийн username-г харуул.

// let username = prompt("Insert name please!");
// const output = document.getElementById('output');

// if (username == admin) {
//   alert("Hello Admin!");
// } else {
//   alert("Hello, ...!")
// }


////////////////////////////////////////////////////////////////

// 4. Гараас оруулсан password зөвхөн 'password123' байх үед
// хэрэглэгч амжилттай нэвтрэх бөгөөд нэвтэрсэн тохиолдолд 'Access granted!'
//  гэж харуул. Хэрэв password алдаатай бол 'Enter the password:' гэсэн
//  текстийг дахин харуул.

// let password = prompt("Enter password")
// while (password != "1234") {
//   password = prompt("Wrong password, please try again!");
//   alert("Wrong password, please try again!")
// }
// //////////////////////////////////////////////

// if (password === "password1234") {
//     alert("Access granted!");
// } else {
//     alert("Enter th password!!")
// }
// /////////////////////////////////////////////

// if (password === password123) {
//   console.log("Access granted!")
// } else (password != "1234"); {
//   console.log("Enter the password: ")
// }



//////////////////////////////////////////////////////////////

// 5. 'Hello World' гэсэн текстийг 5 удаа хэвлэ.

    // let text = 0;

    // while (text < 5) {
    //     console.log(text + 1, "Hello World!")
    //     text++;
    // } 

    // for (text = 0; text < 10; text++) {
    //     console.log(text, "Hello World!") 
    // }
///////////////////////////////////////////////////////////////

// 6. 1-20 хүртэл тоог хэвлэж харуул.

    // for (let i = 0; i < 20; i++) {
    //     console.log(i)
    // }

///////////////////////////////////////////////////////////////

// 1. 1-20 хүртэл тооны нийлбэрийг ол.

// let total = 0;
// let num = 0;

// while (num <= 20) {
// // 1, 2, 3, ..., 20
//   total = total + num;
//   num = num + 1; // num++
// }
// console.log(total);

/////////////////////////////////////////////////////////////

// 2. password нь 'pass1234' байх бөгөөд буруу хийх 3
// удаагийн боломж л байна.
// Зөв байх тохиолдолд 'Access granted!' гэж харагдах бол буруу оруулсан
// тохиолдолд 'Enter your password: ' гэж гарч ирнэ. Харин 3 удаа буруу
// оруулсан тохиолдолд 'Access denied!' гэж харагдана.

// let password = prompt("Password?");
// let i = 1;
// while (i < 3 && password !=="pass1234") {
//     prompt('enter your password!')
//     i++;
// }
// if (password === "pass1234") {
//     alert('Accesss granted'); 
// }
// else if (password !== "pass1234") {
//     alert('Enter your password!');
// }
/////////////////////////////////////////////////////////////////
// let effort = 2;
// let password = prompt("Password?")
// while (effort > 0 && password !=="pass1234") {
//     password = prompt("Enter your password.")
//     effort -=1
// }
// if (password == "pass1234") {
//     alert("Access granted!")
// }
// else {
//     alert("Access denied!")
// }
//////////////////////////////////////////////////////////////

// 3. Fibonacci sequence эхний 10 тоог хэвлэ.

