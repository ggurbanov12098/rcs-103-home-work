const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Qp8keVUh',
  database: 'new_schema'
});

// Middleware to parse JSON bodies
app.use(express.json());

// GET method to fetch all student records (http://localhost:3000/students)
// curl -X GET http://localhost:3000/students
app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM students';
  pool.query(sql, (error, results) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    res.json(results);
  });
});


// GET method to fetch a single student record by ID (http://localhost:3000/students:id)
// curl -X GET http://localhost:3000/students:id
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM students WHERE student_id = ?';
  pool.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (results.length === 0) {
      return res.status(404).send('Student not found.');
    }
    res.json(results[0]);
  });
});


// PATCH method to update a student record by ID (http://localhost:3000/students/:id)
/** Testing in terminal the PATCH functionality

curl -X PATCH http://localhost:3000/students/1 \
-H "Content-Type: application/json" \
-d '{
  "first_name": "UpdatedFirstName",
  "last_name": "UpdatedLastName",
  "email": "updatedemail@example.com"
}'

*/
app.patch('/students/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Build the SQL query dynamically based on the provided fields
  const fields = Object.keys(updates);
  if (fields.length === 0) {
    return res.status(400).send('No fields to update.');
  }

  const sql = `UPDATE students SET ${fields.map(field => `${field} = ?`).join(', ')} WHERE student_id = ?`;
  const values = [...fields.map(field => updates[field]), id];

  pool.query(sql, values, (error, results) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Student not found.');
    }
    res.send('Student updated successfully.');
  });
});


// POST method to create a new student record (http://localhost:3000/students)
/**Testing in terminal the POST functionality

curl -X POST http://localhost:3000/students \
-H "Content-Type: application/json" \
-d '{
  "first_name": "Name",
  "last_name": "LastName",
  "email": "mail@example.com"
}'

 */
app.post('/students', (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).send('First name, last name, and email are required.');
  }

  const sql = 'INSERT INTO students (first_name, last_name, email) VALUES (?, ?, ?)';
  const values = [first_name, last_name, email];

  pool.query(sql, values, (error, results) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    res.status(201).send(`Student created with ID: ${results.insertId}`);
  });
});


// DELETE method to delete a student record by ID (http://localhost:3000/students/:id)
// curl -X DELETE http://localhost:3000/students/:id
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM students WHERE student_id = ?';
  pool.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Student not found.');
    }
    res.send('Student deleted successfully.');
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
