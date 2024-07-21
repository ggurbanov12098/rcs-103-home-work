import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";

console.log(JSON.parse(localStorage.getItem("basket")), "BasketIdOnly");
const basketContainer = document.querySelector(".basketContainer");


let basketArr = JSON.parse(localStorage.getItem("basket")) || [];
let resultBasketArr = [];

getData().then(data => {
    // console.log(data.find((elem)=>elem.id===1));
    JSON.parse(localStorage.getItem("basket")).forEach((item) => {
        // console.log(data.find((elem) => elem.id === basketID));
        console.log(item, "item");
        resultBasketArr.push({...data.find((elem) => elem.id === item.id), count: item.count})
    });

    console.log(resultBasketArr, "resultBasketArr");
    // createCard(basketContainer, resultBasketArr);

    console.log(basketArr);
    // <h3>${elem.title.substring(0, 10)} - ${elem.price}</h3>
    resultBasketArr.forEach((elem) => {
        basketContainer.innerHTML += `
            <div class="basketItem">
                <h3>${elem.title} - ${elem.price}</h3>
                <button>+</button>
                <span>${elem.count}</span>
                <button>-</button>
            </div>;
        `;
    });



});






{/* <div class="basketItem">
  <h3>name - price</h3>
  <button>+</button>
  <span>Count</span>
  <button>-</button>
</div>; */}