console.log("Train.ts ishga tushdi!");
//-------------------------M--------------------------------------

/*

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, 
orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

 */

function palindromCheck(string: string) {
  const result = string.split("").reverse().join(""); // split (string ga aylantiradi), reverse (), join("" bo'sh qo'ysa har birini orasini ochib beradi)
  return string === result;
}

console.log(palindromCheck("mom")); // m-->0-->m m<--o<--m                       true
console.log(palindromCheck("abs")); // chapdan o'ngga abs, o'ngdan chapga sba    false
console.log(palindromCheck("dad")); // d-->a-->d d<--a<--d                       true

//-------------------------M--------------------------------------

/* 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va
 array ichidagi har bir raqam uchun raqamni ozi va 
hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, 
hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/
// interface SquareObject {
//   number: number;
//   square: number;
// }

// function raqamTopish(numbers: number[]): SquareObject[] {
//   const natija: SquareObject[] = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     const squareObj: SquareObject = {
//       number: num,
//       square: num * num,
//     };
//     natija.push(squareObj);
//   }

//   return natija;
// }

// console.log(raqamTopish([1, 2, 3]));

//-------------------------L--------------------------------------

/* Shunday function yozing, u string qabul qilsin va string ichidagi
 hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
 MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

// function check(harf: string): string {
//   const words: string[] = harf.split(" ");
//   const harflar: string[] = [];

//   for (const word of words) {
//     const reversedWord = word.split("").reverse().join("");
//     harflar.push(reversedWord);
//   }

//   return harflar.join(" ");
// }

// console.log(check("we like coding"));
//-------------------------K--------------------------------------

/*Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1; */

// function getVolwels(str: string): number {
//   const volwels: string[] = ["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"];

//   let volwel: number = 0; // bu yerda count versa pastda ++ amali ishlame qoladi shuning uchun let ishlatish shart.

//   for (let char of str) {
//     if (volwels.includes(char)) {
//       volwel++;
//     }
//   }
//   return volwel;
// }

// console.log(getVolwels("salom")); // stringni ichida nechta unli harif bolsa shuni nomerlab terminalga chiqarib beradi.
//-------------------------J--------------------------------------

// function findLongestWord(inputString: string) {
//   const words: string[] = inputString.split(" ");

//   let longestWord: string = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// const exampleString: string = "come from Uzbekiston";

// const result: string = findLongestWord(exampleString);
// console.log(result);

//-------------------------I--------------------------------------

/* I-TASK: 

Shunday function tuzing, unga string argument pass bolsin.
 Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
 */

// function getDigits(str: string): string {
//   let result: string = "";
//   for (let char of str) {
//     if (!isNaN(parseInt(char))) {
//       result += char;
//     }
//   }
//   return result;
// }

// console.log(getDigits("m14i1t"));

//-------------------------H--------------------------------------

/* 
shunday function tuzing, u integerlardan iborat arrayni argument
 sifatida qabul qilib, faqat positive qiymatlarni olib string
  holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

// function getPositive(arr: number[]): string {
//   return arr.filter((x) => x > 0).join("");
// }

// Test
// console.log(getPositive([1, -4, 2]));

//---------------------------------------------------------------

/*
Shunday function tuzing, u string qabul qilib teskari
 qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh"

*/

// function gerReverse(str: string): string {
//   return str.split("").reverse().join("");
// }

// console.log(gerReverse("hello"));

//-----------------------------------------------------------

/** 
 Project Standards:
  - Loggin standards
  - Naming standards
      function, method, variable, object => CAMLE   goHome
      class => PASCAL                       MemberServise
      folder => KEBAB
      css => SNAKE                          button_style
  - Error handling


  Request
Traditional Api
Rest Api
GraphQl Api


  
 */

/*  Frontend development
Traditional FD    => SSR  => EJS
Modern FD         => SPA  => REACT
*/

/* cookies
request joim 
self destroy

*/

/*
validation: 
Frontend va validation
Backend validation
Database validation 
*/
//-----------------------------------------------------------
