const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, express!')
});

app.post('/counter', (req, res) => {
  counter ++;
  res.send('Post request')
});

app.get('/counter', (req, res) => {
  res.send(JSON.stringify(counter));
});

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send('Delete request received');
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);