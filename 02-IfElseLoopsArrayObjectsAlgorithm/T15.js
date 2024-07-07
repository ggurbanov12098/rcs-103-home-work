//15. Write a simple JavaScript function to join all elements of the following array into a string.

function join(array, separator) {
    return array.join(separator);
}

let res = join([1, 73, 99, 20], "*");
console.log(`typeof result: ${typeof res}. Output: ${res}`);
res = join([1, 73, 99, 20], "/")
console.log(`Another example: ${res}`);