const router = require("express").Router();
const fs = require("fs");

const readData = () => {
    return JSON.parse(fs.readFileSync("./data/baskets.json"));
};

const writeData = (data) => {
    fs.writeFileSync("./data/baskets.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const baskets = readData();
    res.render("baskets", { baskets });
});

router.post("/", (req, res) => {
    const baskets = readData();
    const uniqueId = new Date().getTime();
    const date = new Date();
    const newBasket = {
        id: uniqueId,
        createdAt: date,
        updatedAt: date,
        ...req.body,
    };
    baskets.push(newBasket);
    writeData(baskets);
    res.status(201).json(newBasket);
});

router.delete("/:id", (req, res) => {
    const baskets = readData();
    const index = baskets.findIndex((b) => b.id == req.params.id);
    if (index !== -1) {
        const deletedBasket = baskets.splice(index, 1);
        writeData(baskets);
        res.json(deletedBasket);
    } else {
        res.status(404).json({ message: "Basket not found" });
    }
});

module.exports = router;
