// routes/productRoutes.js
const router = require("express").Router();
const fs = require("fs");

const readData = () => {
    return JSON.parse(fs.readFileSync("./data/products.json"));
};
const writeData = (data) => {
    fs.writeFileSync("./data/products.json", JSON.stringify(data));
};

const readFavorites = () => {
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
};
const addToFavorite = (data) => {
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const products = readData();
    res.render("products", { products });
});

router.post("/", (req, res) => {
    const products = readData();
    const uniqueId = new Date().getTime();
    const date = new Date();
    const newProduct = {
        id: uniqueId,
        createdAt: date,
        updatedAt: date,
        ...req.body,
    };
    products.push(newProduct);
    writeData(products);
    res.status(201).json(newProduct);
});

router.delete("/:id", (req, res) => {
    const products = readData();
    const index = products.findIndex((p) => p.id == req.params.id);
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        writeData(products);
        res.json(deletedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

router.get("/add/:id", (req, res) => {
    const products = readData();
    const favorites = readFavorites();
    const index = products.findIndex((p) => p.id == req.params.id);
    if (index !== -1) {
        const foundProduct = products[index];
        favorites.push(foundProduct);
        addToFavorite(favorites);
        res.json(foundProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

module.exports = router;
