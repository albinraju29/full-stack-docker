const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Pre-filled item list (in-memory)
let items = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Carrot" }
];

// GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/api/items', (req, res) => {
  const newItem = { name: req.body.name };
  items.push(newItem);
  res.json(newItem);
});

// Start server on all interfaces
app.listen(3001, '0.0.0.0', () => {
  console.log("✅ Backend running on http://0.0.0.0:3001");
});
