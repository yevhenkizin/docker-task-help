const express = require('express');

const app = express();

const path = `${__dirname}/views/`;
const port = 80;

app.use(express.static(path));

app.get('/', (req, res) => {
    res.sendFile(`${path}index.html`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
});
