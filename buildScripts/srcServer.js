/**
 * Development source server
 */

/* eslint-disable no-console */

import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

import scriptsConfig from '../buildScripts/buildScripts.config';
import webpackConfig from '../webpack.config.dev';

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(request, response) {
    // Fake "database" data:
    response.json([
        {'id':1, 'firstName':'Bob', 'lastName':'Smith', 'email':'bob@gmail.com'},
        {'id':2, 'firstName':'Tammy', 'lastName':'Norton', 'email':'tnorton@gmail.com'},
        {'id':3, 'firstName':'Tina', 'lastName':'Lee', 'email':'lee.tina@gmail.com'}
    ]);
});

app.listen(scriptsConfig.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        const url = 'http://localhost:' + scriptsConfig.port;
        open(url);
        console.log(chalk.green(`Serving ${url}...`));
    }
});
