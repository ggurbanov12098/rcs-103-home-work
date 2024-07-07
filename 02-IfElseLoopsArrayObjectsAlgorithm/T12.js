//12. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

arr.forEach((element, index) => {
    if (typeof element === 'string' && element === element.toUpperCase()) {
        console.log(`Word with all capital letters: ${element}. Index in array: ${index}`);
    }
});