const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

app.enable('trust proxy');


app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`))
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/:houseid', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
