const express = require('express'); // Import express
const app = express(); //Create an express app instant
const port = 3000 //set the port

// define routes
app.get('/',(req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/about',(req, res) => {
  res.sendFile('about.html', { root: __dirname });
});

app.get('/contact',(req, res) => {
  res.sendFile('contact.html', { root: __dirname });
});

app.get('/services',(req, res) => {
  res.sendFile('services.html', { root: __dirname });
});




// Listen to the port
app.listen(port, () => {
  console.log(`😍Server is running on http://localhost:${port}`);
});