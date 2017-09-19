const express = require('express');
// const fs = require('fs');

let app = express();

// app.get();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
