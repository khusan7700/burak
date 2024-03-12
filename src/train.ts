console.log("Train.ts ishga tushdi!");
//-------------------------K--------------------------------------

/*Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1; */

function getVolwels(str: string): number {
  const volwels: string[] = ["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"];

  let volwel: number = 0; // bu yerda count versa pastda ++ amali ishlame qoladi shuning uchun let ishlatish shart.

  for (let char of str) {
    if (volwels.includes(char)) {
      volwel++;
    }
  }
  return volwel;
}

console.log(getVolwels("salom")); // stringni ichida nechta unli harif bolsa shuni nomerlab terminalga chiqarib beradi.
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


Traditional Api
Rest Api
GraphQl Api


  
 */

/*
cookies






*/

//-----------------------------------------------------------
