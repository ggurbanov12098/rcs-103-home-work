/**
 * 20. Bir string ve bir char qebul eden bir function yazın.
 * Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. 
 * Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.
 */

function charIndexSum(str, char) {
    let sum = 0;
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
            found = true;
        }
    }
    return found ? sum : -1;
}
charIndexSum('salam', 'a')
console.log(`Res of sum of indexes for character 'a' in string 'salam' is ${charIndexSum('salam', 'a')}`);
console.log(`Res of sum of indexes for character 's' in string 'salam' is ${charIndexSum('salam', 's')}`);
console.log(`Res of sum of indexes for character 'z' in string 'salam' is ${charIndexSum('salam', 'z')}`);