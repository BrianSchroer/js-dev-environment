/**
 * Development source server
 */
import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

import config from '../buildScripts/buildScripts.config';
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

app.listen(config.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        const url = 'http://localhost:' + config.port;
        open(url);
        console.log(chalk.green(`Serving ${url}...`));
    }
});
