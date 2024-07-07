//11. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
let longestWord = arr.filter(element => typeof element === 'string')
    .reduce((longest, current) => current.length > longest.length ? current : longest, "");
console.log("Longest word: ", longestWord);

/** 
 * What are Map, Reduce and Filter functions in programming?

    'Map' applies a function to each element in an array and returns an array of the results, 
    'Reduce' applies a function to the array and returns a single output, 
    'Filter' uses a boolean function to select certain elements from an array.
 */