console.log("question 1");

let myArr = [2,4,6,8,10];
let myArr2 = [...myArr, 5,7,9];
console.log(myArr2);

console.log("_______________________________________________");
console.log("question2");

let myArr3 = [...myArr2];
console.log(myArr3);

console.log("_______________________________________________");
console.log("question3");

let cold = ["autumn", "winter"]
let warm = ["spring", "summer"];
let seasons = [...cold, ...warm];
console.log(seasons);

