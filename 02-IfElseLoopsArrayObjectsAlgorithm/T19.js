//19. Write a function that compares two arrays and returns true if they are identical.

function isEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));