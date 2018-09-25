const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Reading files
const buffer = fs.readFileSync(path.join(__dirname, '/input.json'));
console.log(JSON.parse(buffer.toString()));

// Network requests
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({title: 'test'}),
})
  .then(resp => resp.json())
  .then(json => console.log(json));
