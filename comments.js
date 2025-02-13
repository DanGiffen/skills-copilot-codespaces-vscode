// Create web server
// Create a route for POST /comments
// Read the comment from the request body
// Add the comment to the list of comments
// Send a response with the updated list of comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server using node comments.js and send a POST request with a comment using Postman. The server should respond with the updated list of comments.