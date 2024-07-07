//18. Write a method that returns a duplicate-free array.

function clearDuplicate(array) {
    return [...new Set(array)];
}
console.log(`Original array: [1, 2, 1, 2, 3]. Duplicate free array: `, clearDuplicate([1, 2, 1, 2, 3]));
console.log(`Original array: ['a', 2, 'd', 2, 'a', 14, 14, 's', false]. Duplicate free array: `, clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));