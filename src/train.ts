console.log("Train.ts ishga tushdi!");
//---------------------------------------------------------------

/* 
shunday function tuzing, u integerlardan iborat arrayni argument
 sifatida qabul qilib, faqat positive qiymatlarni olib string
  holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

function getPositive(arr: number[]): string {
  return arr.filter((x) => x > 0).join("");
}

// Test
console.log(getPositive([1, -4, 2]));

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
