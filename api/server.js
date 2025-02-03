const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
const port = 3000;

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  database: 'messagesdb',
  password: 'postgres',
  port: 5432,
});

// Endpoint to fetch the message
app.get('/messages', async (req, res) => {
    try {
        console.log(`[API] ATTEMPING TO PULL MESSAGES...`);
        const result = await pool.query('SELECT * FROM messages');
        if (result.rows.length > 0) {
          console.log(`[API] PULLED ${result.rows.length} MESSAGES...`);
          res.json({ message: result.rows[0].message });
        } else {
          console.error(`[API] ERROR: No result from the database.`);
        }
        
    } catch (err) {
        console.error(`[API] ERROR: ${err}`);
        res.status(500).send('Error fetching message');
    }
});

app.listen(port, () => {
  console.log(`[API] Server running on http://localhost:${port}`);
});
