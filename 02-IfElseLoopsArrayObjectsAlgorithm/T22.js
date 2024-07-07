/**
 * 22. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
 * gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. 
 * Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.
 */

function mergeArraysToString(array1, array2, char) {
    let combinedArray = [...array1, ...array2];
    return combinedArray.join(char);
}
console.log(mergeArraysToString([1, 2], [3, 4], '*'));
console.log(mergeArraysToString(['a', 'b'], ['c', 'd'], '-'));