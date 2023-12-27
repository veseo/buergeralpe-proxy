const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use('/', async (req, res) => {
  try {
    const response = await fetch('https://content.bergfex.at/data/28/skigebiet/schneeberichte.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
