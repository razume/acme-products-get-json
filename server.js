const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next) => {
  db.readJSON(`${__dirname}/products.json`).then(productsJSON =>
    res.send(productsJSON)
  );
});

app.listen(3000, () => console.log('listening on port 3000'));

app.use(express.static('public'));
