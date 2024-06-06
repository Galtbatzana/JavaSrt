// // "Comments can make code readable" - нэг мөртэй коммент болгох

// /* "Comments can make code readable" олон мөртэй коммент болгох */

// const variableNum = 12;
// console.log(variableNum);

// const variableFloatNum = 5.5;
// console.log(variableFloatNum);

// const variableString = 'Hello';
// console.log(variableString);

// const variableBoolean = 2 < 3; 
// console.log(variableBoolean);

// const variableUndefined = Undefined;
//  console.log(variableUndefined);

// const variableNull = '';
// console.log(variableNull);

// // 4. Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined, null гэх мэт
// // Утга оноогоогүй хувьсагч зарлах
// console.log(typeof variableNum)
// console.log(typeof variableFloatNum)
// console.log(typeof variableBoolean)
// console.log(typeof variableUndefined)
// console.log(typeof variableNull)

// //6. Утга оноосон хувьсагч зарлах
// // let a =;

// //7. Олон мөрөнд First name, last name, marital status, 
// // country, age гэсэн нэртэй хувьсагч зарлах

//  let student = {
//     firstname: '';
//     lastname: '';
//     age: '';

//  };

//  //8. Нэг мөрөнд First name, last name, marital status, 
//  //country, age гэсэн нэртэй хувьсагч зарлах

//  let age1, school, city;

//  // 9.  Гурвалжингийн периметрийг олох
// let a, b, c;


// // 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?

// if (4 > 3 && 10 < 12)  {

// } console.log();

// // 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?

// if (4 > 3 && 10 > 12) {

// } console.log();


// // 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?

// if (4 > 3 || 10 <  12) {
//     console.log();
// }

// // 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?

// if (4 > 3 === 10 > 12) {
//     console.log();
// }

// // 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?

// if (4 < 3 || 10 > 12 ) {

// } 

// 16. let five = !(4 > 3)   // false

// console.log(five);

// // 17. let six = !(4 < 3) ямар хариу буцаах вэ ? 

// console.log(six); // false

// let seven = !(4 > 3 && 10 < 12) //ямар хариу буцаах вэ ?

// console.log(seven); // false

// let eight = !(4 > 3 && 10 > 12) // ямар хариу буцаах вэ ?
// console.log(eight); // true

// let nine = !(4 === "4") //ямар хариу буцаах вэ ?
// console.log(nine); // true


// . 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад 
// гарах үлдэгдлийг хэвлэнэ үү.

// const a = 936;
// const b = 12 ;

// let total = (a / b ) / 9
// console.log(total); // 8.6666
 
// 2. Гараас 0-100 хооронд тоон утга авч 90-100-н хооронд 
//байвал true, бусад утгад false буцаа.

// let num ( 90 <= num <= 100) || false

// 3. Он, сараа гараас оруулахад тухайн сар 
// хэд хоногтой болохыг харуул.
// 4. Өгөгдсөн эерэг тоо нь 3 эсвэл 7-ын үржвэр эсэхийг шалгана уу.
// 5. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу.
   
// const num = 7; 
// if (num % 2 == 0) {
//     let num = 'Even month';   
// }
// else { 
//     let num = 'Odd month'; 
//     console.log(num)
// }

// 6. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад 
// хэвлэж харуулна уу.
// 7. 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 80-аас 
// их тоонуудын нийлбэрийг ол.


// let a = 50;  // 0
// let b = 60; // 0
// let c = 80; // 0
// let d = 90; // 90

// let sum = 0;

// if(a < 80){
//     a = 0;
// }
// if(b < 80){
//     b = 0;
// }
// if(c < 80){
//     c = 0;
// }
// if(d < 80){
//     d = 0;
// }
// sum = a + b + c + d;
// console.log(sum);



// 8. Bodlogo 
// leap year : 2 sar ni 29 honogtoi ugui bol 28 honogtoi

// const giverYear = 2024;


// if (giverYear % 4 == 0 && giverYear % 100 != 0 || giverYear % 400 == 0) {
//     console.log(`${givenYear} is a leap year`);
// } else {
//    console.log(givenYear + " is common year");
// }

// 9. Bodlogo
// let month = 1;
// let oddMonth = 1, 3, 5, 7, 8, 10, 12;
// let evenMonth = 2, 4, 6, 9, 11;


// if (month % 7 == 3 ) {
//     console.log(`${oddMonth} is month with 31days`);

// } 
// else if (month % 7 == 2) {
//     return (`${evenMonth} is month with 30days`);
// }
// else if (giverYear % 4 == 0 && giverYear % 100 != 0 || giverYear % 400 == 0) {
//     let febMonth = 29; 
// }
// else {
//     let ordinaryFeb = 28;
// }
// console.log(month)

// 1. daalgavar 
// let a = 1;
// let b = 2;

// if (a > b || a < b) {
//     console.log(a);
// } 

// 3-n toonii iheesee baga ni
//  let a = 4;
//  let b = 5;
//  let c = 6;

// if (a < b) {

// } 
//  else if (a < c) {
//   let smallNum = a;
// } 
// else if (b < c) {
//  let smallNum = b;
// }
// else {
//     let smallNum = c;
// }
//  console.log(smallNum);
  
// if (a < b && c < b ) {
//     console.log("b")
//  } else if ( b < c && c > a) {
//     console.log("c")
//     } else {
//         console.log("a")
//     }

// 2. Daalgavar
// 4-n toonii uheesee 2 dahi ni
// let a = 4;
// let b = 5;
// let c = 6;
// let d = 7;

// if (a < d && b < d && c < d) {
//     console.log("d")
//  } else if (a < c && b < c && d < c) {
//     console.log("c")
//  } else if (a < b && c < b && d < b) {
//         console.log("b")
//  } else {
//         console.log("a")
//     }

// 3. Daalgavar
// 4 toonii hamgiin ihiig ol yamar negeg nuhtsul ashiglahgui geer. 
// logical operatergui

// let a = 4;
// let b = 5;
// let c = 6;
// let d = 7;

//console.log(Math.max (a, b ,c, d));


// gurvaljingiin gurvan taliig uguhud hurvaljin mun uu? oloh!


// console.log(Math.abs(a, b, c, d))

// Math.abs == ? ni too


// 3. Daalgavar
// tegsh sondgoig ol/   odd/even

// let num = 1234;

// if (num % 2 == 0) {
//     console.log('evenNumber')
// } else {
//     console.log('oddNumber')
// }
 
// 4. Daalgavar
// daraah 3 ni toog erembel

let num1 = 12;
let num2 = 34;
let num3 = 56;

if (num1 > num2 ) {
    if (num1 > num3) {
        if (num2 > num3) {
            console.log("num1 num2 num3")
        }
    }
} if (num2 > num1) {
    if (num2 > num3) {
        if (num1 > num3) {
     console.log("num2", "num1", "num3" ) 
        } else { console.log("num2","num3","num1" )}

    }
} 
 



// 5. Daalgavar
// tegsh untugt gurvaljinii 2 tal ni A,B ugugdsun bol talbaig ol


// 6.Daalgavar
// A toog B toond huvaahad garah noogdvor ba uldegdeliig ol