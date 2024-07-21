import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";

let basket = JSON.parse(localStorage.getItem("basket")) || [];
const products = document.querySelector(".products");

getData().then((data) => {
    createCard(products, data);
    products.addEventListener("click", (e) => {
        if(e.target.classList.contains("addBasket")){
            // basket.push(+e.target.getAttribute("customID"));
            
            if(basket.find(elem => elem.id == e.target.getAttribute("customID"))){
                let findElem = JSON.parse(localStorage.getItem("basket")).find(elem => elem.id == e.target.getAttribute("customID"))
                findElem.count++
                let newArr = basket.filter(elem=>elem.id!=findElem.id)
                newArr.push(findElem);
                localStorage.setItem("basket", JSON.stringify(newArr));
            }else{
                let obj = {
                    id: +e.target.getAttribute("customID"),
                    count: 1,
                };

                console.log(obj);
                basket.push(obj);
                console.log(basket, "basket");
                localStorage.setItem("basket", JSON.stringify(basket));
            }
        }
    });
});


localStorage.setItem("name", "JSON.stringify(arr)");