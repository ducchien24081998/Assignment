console.log("question1");
let fullName: string = "Họ và tên";
function hello1() {
    console.log("fullnameGlobal1: " + fullName);
}

function hello2() {
    let fullName: string = "Vũ Đức Chiến";
    console.log("fullnameFunctionScope: " + fullName);
}

function hello3() {
    let fullName: string = "Tôn Ngộ không";
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

function printNameV2(fullName: string) {
    console.log(fullName);
}
printNameV2("Vũ Đức Chiến");

console.log("________________________________________________________________");

console.log("question3");

function getGreeting(firstName: string, lastName: string) {
    function greeting() {
        console.log(firstName + " " + lastName);
    }
    greeting();
}
getGreeting("Vũ", "Vũ Đức Chiến");

console.log("________________________________________________________________");

console.log("question4");

for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

console.log("________________________________________________________________");

console.log("question5");

function tinhBinhPhuongHoacCanBacHai(
    operation: "binh phuong" | "canBacHai",
    number: number
) {
    if (operation === "binh phuong") {
        console.log("bình phương của số nhập là: ", number * number);
    } else if (operation === "canBacHai") {
        console.log("căn bậc 2 của số nhập là: ", Math.sqrt(number));
    }
}
let tinhBinhPhuong = (number: number) => {
    tinhBinhPhuongHoacCanBacHai("binh phuong", number);
};
let tinhCanBac2 = (number: number) => {
    tinhBinhPhuongHoacCanBacHai("canBacHai", number);
};
tinhBinhPhuong(5);
tinhCanBac2(144);
