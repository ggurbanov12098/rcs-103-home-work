//4. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
console.log(`Array: ${arr}`);
let evenElements = arr.filter(num => num % 2 === 0);
console.log(`Even elements of Array: ${evenElements}`);
let maxEvenElement = Math.max(...evenElements);
console.log(`Max of even elements in array: ${maxEvenElement}`);