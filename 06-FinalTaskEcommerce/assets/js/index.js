import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";

let basket = JSON.parse(localStorage.getItem("basket")) || [];
const products = document.querySelector(".products");

function startTokenCheck() {
    setInterval(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = 'reglog.html';
            return;
        }

        try {
            await axios.get('http://localhost:3001/products', {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(headers);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                localStorage.removeItem('token');
                alert('Session expired. Please log in again.');
                window.location.href = 'reglog.html';
            }
        }
    }, 5000); // Check every 5 seconds
}


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

// Start checking the token validity if the token exists
if (localStorage.getItem('token')) {
    startTokenCheck();
} else {
    window.location.href = 'reglog.html';
}

// localStorage.setItem("name", JSON.stringify(arr));