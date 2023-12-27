const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
