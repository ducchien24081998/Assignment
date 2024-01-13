var arr = ["a", "b", "c", "d", "e"];
for (var i = 0; i < arr.length; i++) {
    console.log("gi\u00E1 tr\u1ECB th\u1EE9 ".concat(i, ": ").concat(arr[i]));
}
arr.forEach(function (value) {
    console.log("value: ", value);
});
