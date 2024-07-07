//10. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
console.log(arr);
arr.forEach((element, index) => {
    if (typeof element === "boolean") {
        let leftNeighbor = index > 0 ? arr[index - 1] : null;
        let rightNeighbor = index < arr.length - 1 ? arr[index + 1] : null;
        console.log(`Boolean element: ${element}. Index of the element in array: ${index}`);
        console.log(`leftNeighbor: ${leftNeighbor}`);
        console.log(`rightNeighbor: ${rightNeighbor}`);
    }
});