var arr: Array<string> = ["a", "b", "c", "d", "e"];
for (let i:number = 0; i < arr.length; i++) {
    console.log(`giá trị thứ ${i +1}: ${arr[i]}`);
}
arr.forEach((value) => {
    console.log("value: ", value);  
});