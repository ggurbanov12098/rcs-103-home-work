//7. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
console.log(`Array: ${arr}`);
let evenElements = arr.filter(num => num % 2 === 0);
let oddElements = arr.filter(num => num % 2 !== 0);
let minEvenElement = Math.min(...evenElements);
let maxOddElement = Math.max(...oddElements);
let minEvenIndex = arr.indexOf(minEvenElement);
let maxOddIndex = arr.indexOf(maxOddElement);
[arr[minEvenIndex], arr[maxOddIndex]] = [arr[maxOddIndex], arr[minEvenIndex]];
console.log(`Swapping array's minEvenElement with maxOddElement: ${arr}`);