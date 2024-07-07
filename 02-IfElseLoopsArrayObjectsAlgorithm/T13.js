//13. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın 

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
        
arr.forEach((element) => {
    if (typeof element === 'string') {
        let upperCaseCount = element.split('').filter(char => char === char.toUpperCase() && isNaN(char)).length;
        if (upperCaseCount > 2) {
            console.log(`Element with more than 2 uppercase letters: ${element}`);
        }
    }
});