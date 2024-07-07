//17. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.

function clear(array) {
    return array.filter(element => Boolean(element));
}
console.log(clear([0, 1, false, 2, undefined, '', 3, null]));