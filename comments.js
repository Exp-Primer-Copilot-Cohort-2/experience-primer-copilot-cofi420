//Create web server
const express = require('express');
const app = express();
//Create a port
const port = 3000;
//Create a path
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//Import the comments.js file
const comments = require('./comments.js');
//Use the comments.js file
app.get('/comments', (req, res) => {
  res.json(comments);
});
//Use the comments.js file
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});
//Export the comments.js file
module.exports = comments;