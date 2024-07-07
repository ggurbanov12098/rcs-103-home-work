/**
 * 21. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. 
 * Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. 
 * Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir,
 *  eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.
 */

function addStringAtIndex(array, index, string) {
    if (index >= array.length) {
        array.push(string);
    } else {
        array.splice(index, 0, string);
    }
    return array;
}
console.log(addStringAtIndex(['a', 'salam', 'b', 'world'], 3, 'dev'));
console.log(addStringAtIndex(['a', 'salam', 'b', 'world'], 5, 'dev'));
console.log(addStringAtIndex(['a', 'salam', 'b', 'world'], 1, 'dev'));