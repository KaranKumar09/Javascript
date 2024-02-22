const express = require('express');
const app = express();
const fs = require('fs');
const port = 4000;

app.get('/readfile', (req, res) => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            console.log('error');
        }
        res.send(data);
    })

});

app.listen(port, () => {

    console.log(`server is listening at http://localhost:$ {port}`);
});