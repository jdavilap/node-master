const http = require('http');
const express = require('express');

const app = express()

app.use('/', (req, res, next) => {
    res.send('<h1>Hello Express</h1>');
 })

app.listen(3000)