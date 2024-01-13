console.log("question1");
var fullName = "Họ và tên";
function hello1() {
    console.log("fullnameGlobal1: " + fullName);
}
function hello2() {
    var fullName = "Vũ Đức Chiến";
    console.log("fullnameFunctionScope: " + fullName);
}
function hello3() {
    var fullName = "Tôn Ngộ không";
    function hello() {
        console.log(fullName);
    }
    hello();
}
console.log("cau a: ");
hello1();
console.log("cau b: ");
hello2();
console.log("cau c: ");
hello3();
console.log("________________________________________________________________");
console.log("question2");
function printName() {
    console.log("Vũ Đức Chiến");
}
printName();
function printNameV2(fullName) {
    console.log(fullName);
}
printNameV2("Vũ Đức Chiến");
console.log("________________________________________________________________");
console.log("question3");
function getGreeting(firstName, lastName) {
    function greeting() {
        console.log(firstName + " " + lastName);
    }
    greeting();
}
getGreeting("Vũ", "Vũ Đức Chiến");
console.log("________________________________________________________________");
console.log("question4");
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
};
for (var i = 0; i < 6; i++) {
    _loop_1(i);
}
console.log("________________________________________________________________");
console.log("question5");
function tinhBinhPhuongHoacCanBacHai(operation, number) {
    if (operation === "binh phuong") {
        console.log("bình phương của số nhập là: ", number * number);
    }
    else if (operation === "canBacHai") {
        console.log("căn bậc 2 của số nhập là: ", Math.sqrt(number));
    }
}
var tinhBinhPhuong = function (number) {
    tinhBinhPhuongHoacCanBacHai("binh phuong", number);
};
var tinhCanBac2 = function (number) {
    tinhBinhPhuongHoacCanBacHai("canBacHai", number);
};
tinhBinhPhuong(5);
tinhCanBac2(100);
