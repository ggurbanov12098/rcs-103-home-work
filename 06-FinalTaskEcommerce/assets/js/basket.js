import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";

console.log(JSON.parse(localStorage.getItem("basket")), "BasketIdOnly");
const basketContainer = document.querySelector(".basketContainer");


let basketArr = JSON.parse(localStorage.getItem("basket")) || [];
let resultBasketArr = [];

getData().then(data => {
    // console.log(data.find((elem)=>elem.id===1));
    JSON.parse(localStorage.getItem("basket")).forEach((basketID) => {
        // console.log(data.find((elem) => elem.id === basketID));
        resultBasketArr.push(data.find((elem) => elem.id === basketID))
    });

    console.log(resultBasketArr, "resultBasketArr");
    createCard(basketContainer, resultBasketArr);
});

