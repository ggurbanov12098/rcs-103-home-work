//6. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
console.log(`Before min & max swap: ${arr}`);
let minElement = Math.min(...arr);
let maxElement = Math.max(...arr);
let minIndex = arr.indexOf(minElement);
let maxIndex = arr.indexOf(maxElement);
[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
console.log(`Swapped min & max in array: ${arr}`);