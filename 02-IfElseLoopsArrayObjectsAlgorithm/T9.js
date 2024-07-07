//9. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minElement = Math.min(...arr); //2
let maxElement = Math.max(...arr); //10
let filteredArr = arr.filter(num => num !== minElement && num !== maxElement); //3,8,5,4,7,6
let sum = filteredArr.reduce((acc, num) => acc + num, 0); //33
console.log(`Sum of elements except min & max in array: ${sum}`);