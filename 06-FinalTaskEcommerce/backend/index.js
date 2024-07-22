const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { client, connectDB, pool, connectMySQL } = require("./config/db.js");
const bcrypt = require("bcrypt"); // Import bcrypt


dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse JSON


connectMySQL(); // Ensure MySQL is connected

// Registration route
app.post("/register", async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role]);
        res.status(201).json({ id: result.insertId, username, role });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        const user = rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "30s" }
        );
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});






// // MySQL PART
// app.post("/register", async (req, res) => {
//     const { username, password, role } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const [result] = await pool.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role]);
//         res.status(201).json({ id: result.insertId, username, role });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
//         const user = rows[0];

//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ message: "Invalid username or password" });
//         }

//         const token = jwt.sign(
//             { id: user.id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "30s" }
//         );
//         res.status(200).json({ token });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });





// MONGODB PART
// Connect to database and start server
const startServer = async () => {
    await connectDB();

    // User registration
    app.post("/register", async (req, res) => {
        const { username, password, role } = req.body;
        try {
            const user = await User.create({ username, password, role });
            res.status(201).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // User login
    app.post("/login", async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ where: { username } });
            if (!user || !(await user.isValidPassword(password))) {
                return res
                    .status(401)
                    .json({ message: "Invalid username or password" });
            }

            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Define a route to fetch all products
    app.get("/products", async (req, res) => {
        try {
            const database = client.db("testdb");
            const products = database.collection("testcollection");
            const productArray = await products.find().toArray();
            res.json(productArray);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Define a route to fetch a single product by ID
    app.get("/products/:id", async (req, res) => {
        try {
            const database = client.db("testdb");
            const products = database.collection("testcollection");
            const productId = parseInt(req.params.id, 10);

            const product = await products.findOne({ id: productId });

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
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
