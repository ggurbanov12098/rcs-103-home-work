//16. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.

function convert(str) {
    let convertedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toLowerCase()) {
            convertedStr += char.toUpperCase();
        } else {
            convertedStr += char.toLowerCase();
        }
    }
    return convertedStr;
}
let res = convert("HelloWorld");
console.log(`Input: "HelloWorld". Swap case of each character: ${res}`);
console.log(`Another example for saLamNecesen: `, convert('saLamNecesen'));