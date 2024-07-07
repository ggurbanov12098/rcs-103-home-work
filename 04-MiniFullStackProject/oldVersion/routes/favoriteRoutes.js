// routes/favoriteRoutes.js
const router = require("express").Router();
const fs = require("fs");

const readData = () => {
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
};
const writeData = (data) => {
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
};

router.get("/", (req, res) => {
    const favorites = readData();
    res.render("favorites", { favorites });
});

router.post("/", (req, res) => {
    const favorites = readData();
    const newFavorite = req.body;
    favorites.push(newFavorite);
    writeData(favorites);
    res.status(201).json(newFavorite);
});

router.delete("/:id", (req, res) => {
    const favorites = readData();
    const index = favorites.findIndex((f) => f.id == req.params.id);
    if (index !== -1) {
        const deletedFavorite = favorites.splice(index, 1);
        writeData(favorites);
        res.json(deletedFavorite);
    } else {
        res.status(404).json({ message: "Favorite not found" });
    }
});

module.exports = router;
