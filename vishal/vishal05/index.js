const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
    console.log('example app listening at http://localhost:${port}')
})
