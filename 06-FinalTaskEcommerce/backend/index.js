const express = require('express');
const { client, connectDB } = require('./config/db.js');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Connect to database and start server
const startServer = async () => {
    await connectDB();

    // Define a route to fetch products
    app.get('/products', async (req, res) => {
        try {
            const database = client.db('testdb');
            const products = database.collection('testcollection');
            const productArray = await products.find().toArray();
            res.json(productArray);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
};

startServer();
