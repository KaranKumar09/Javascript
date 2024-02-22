const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
    res.end('Hello world');
});
app.listen(port, () => {
    console.log(`server is listening at http://localhost:$ {port}`);
});