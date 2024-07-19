import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";

let basket = JSON.parse(localStorage.getItem("basket")) || [];
const products = document.querySelector(".products");

getData().then((data) => {
    createCard(products, data);
    products.addEventListener("click", (e) => {
        if(e.target.classList.contains("addBasket")){
            basket.push(+e.target.getAttribute("customID"));
            console.log(basket, "basket");
            localStorage.setItem("basket", JSON.stringify(basket));
        }

    });
});


localStorage.setItem("name", "JSON.stringify(arr)");