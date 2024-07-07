//5. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minElement = Math.min(...arr);
let minIndex = arr.indexOf(minElement);
console.log(`Index of Array's min element: ${minIndex}, in case if count starts without zero it's ${minIndex+1}`);