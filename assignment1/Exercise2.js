console.log("question1");
var Question1 = /** @class */ (function () {
    function Question1(n, s) {
        this.name = n;
        this.salary = s;
    }
    ;
    return Question1;
}());
var chien = new Question1("chien", 5244.5);
var chien2 = new Question1("chien2", 10970.055);
var round1 = Math.round(chien.salary);
var round2 = Math.round(chien2.salary);
var floor1 = Math.floor(chien.salary);
var floor2 = Math.floor(chien2.salary);
var ceil1 = Math.ceil(chien.salary);
var ceil2 = Math.ceil(chien2.salary);
console.log("round1...", round1);
console.log("round2...", round2);
console.log(Number.parseInt(chien.salary.toString()));
console.log(Number.parseInt(chien2.salary.toString()));
console.log("----------------------------------------------------------------");
console.log("question2");
var ranNumber = Math.round(Math.random() * Math.pow(10, 5));
console.log(ranNumber);
var myArr = Array.from({ length: 5 }).map(function (_, index) { return 0; });
console.log("myArr...", myArr);
myArr.forEach(function (value, index, myArr) {
    // console.log("value...", value);
    // console.log("index...", index);
    // console.log("myArr...", myArr);
    var ranNumber = Math.round(Math.random() * 10);
    myArr[index] = ranNumber >= 10 ? 0 : ranNumber;
});
console.log("myArr...", myArr.join(""));
var randomNum = Math.floor(Math.random() * Math.pow(10, 5));
var stringNum = randomNum.toString().padStart(5, "0");
console.log("so ngau nhien co 5 chu so: ", stringNum);
console.log("----------------------------------------------------------------");
console.log("question3");
var lastNum = stringNum.slice(3);
console.log("2 số cuối là: ", lastNum);
