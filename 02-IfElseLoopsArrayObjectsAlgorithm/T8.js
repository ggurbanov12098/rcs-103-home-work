//8. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let inputNumber = prompt("Input number:");
if (arr.includes(parseInt(inputNumber))) {
    console.log("Element is in array");
} else {
    console.log("Element is NOT in array");
}