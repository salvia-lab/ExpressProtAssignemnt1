const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! express');
})
app.get('/info', (req, res) => {
    res.send('Hello express!');
  })
  app.get('/contact', (req, res) => {
    res.send('Hello Contact!!');
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})