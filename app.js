'use strict';

const express = require('express');
const os = require('os');

// Constants
const EXTERNAL_PORT = process.env.EXTERNAL_PORT;
const INTERNAL_PORT = process.env.INTERNAL_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World. ' + `Running on http://${req.headers.host}`);
});

app.listen(INTERNAL_PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${EXTERNAL_PORT}`);
});