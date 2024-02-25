console.log("Train.ts ishga tushdi!");

/*
Shunday function tuzing, u string qabul qilib teskari
 qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh"

*/

function gerReverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(gerReverse("hello"));
