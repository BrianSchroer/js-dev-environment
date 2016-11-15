/**
 * Share site via localtunnel
 */

const chalk = require('chalk');
const localtunnel = require('localtunnel');
const config = require('../buildScripts/buildScripts.config')();

var tunnel = localtunnel(config.port, {subdomain: config.localtunnelSubDomain},
    function(err, tunnel) {
        if (err) {
            console.log(err);
        } else {
            console.log(chalk.green(`Sharing http://localhost:${config.port} at ${tunnel.url}`));
        }
    }
);

tunnel.on('close', function() {
    console.log(chalk.green(`localtunnel closed.`));
});
