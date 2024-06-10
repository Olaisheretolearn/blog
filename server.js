// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let likeCount = 0;

app.use(bodyParser.json());

// Endpoint to get the current like count
app.get('/like-count', (req, res) => {
  res.json({ count: likeCount });
});

// Endpoint to update the like count
app.post('/like-count', (req, res) => {
  const { count } = req.body;
  likeCount = count;
  res.json({ message: 'Like count updated successfully.' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
