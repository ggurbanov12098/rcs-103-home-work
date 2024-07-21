const express = require('express');
const dotenv = require('dotenv');
const { client, connectDB } = require('./config/db.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

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

    // Define a route to fetch a single product by ID
    app.get('/products/:id', async (req, res) => {
        try {
            const database = client.db('testdb');
            const products = database.collection('testcollection');
            const productId = parseInt(req.params.id, 10);

            const product = await products.findOne({ id: productId });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.json(product);
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
