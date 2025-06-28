// server.js

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  },
});

// API endpoint to receive contact form data
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, message, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *`,
      [name, email, message]
    );
    res.status(201).json({
      message: 'Message saved successfully!',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Database insert error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
