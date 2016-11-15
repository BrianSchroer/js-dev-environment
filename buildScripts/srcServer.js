/**
 * Development source server
 */
import chalk from 'chalk'
import express from 'express';
import path from 'path'
import open from 'open';
import { config } from '../buildScripts/buildScripts.config';

const app = express();

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(config.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        const url = 'http://localhost:' + config.port;
        open(url);
        console.log(chalk.green(`Serving ${url}...`));
    }
});
