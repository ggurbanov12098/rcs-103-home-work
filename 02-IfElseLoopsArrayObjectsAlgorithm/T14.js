//14. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function getFirst(array, n = 1) {
    if (n <= 0) {
        return [];
    }
    return array.slice(0, n);
}
console.log(getFirst([1, 73, 99, 20])); // -> 1
console.log(getFirst([1, 73, 99, 20], 2)); // -> [1, 73]
console.log(getFirst([1, 73, 99, 20], 0)); // -> []
console.log(getFirst([1, 73, 99, 20], 4)); // -> [1, 73, 99, 20]