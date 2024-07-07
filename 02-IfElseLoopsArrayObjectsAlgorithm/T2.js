//2. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
var res = [];
for (let i = 1; i < arr.length; i+=2) {
    res.push(arr[i]);
}
console.log(res);