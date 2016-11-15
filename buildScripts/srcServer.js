/**
 * Development source server
 */

const express = require('express');
const path = require('path');
const open = require('open');
const config = require('../buildScripts/buildScripts.config')();

const app = express();

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(config.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + config.port);
    }
});
