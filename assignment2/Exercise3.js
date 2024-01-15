var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("question 1");
var myArr = [2, 4, 6, 8, 10];
var myArr2 = __spreadArray(__spreadArray([], myArr, true), [5, 7, 9], false);
console.log(myArr2);
console.log("_______________________________________________");
console.log("question2");
var myArr3 = __spreadArray([], myArr2, true);
console.log(myArr3);
console.log("_______________________________________________");
console.log("question3");
var cold = ["autumn", "winter"];
var warm = ["spring", "summer"];
var seasons = __spreadArray(__spreadArray([], cold, true), warm, true);
console.log(seasons);
