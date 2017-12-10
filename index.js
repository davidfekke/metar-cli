#! /usr/bin/env node
const fetchMETAR = require('./lib/fetchmetar');
const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));

program
 .version(pkg.version)
 .arguments('[icao]')
 .option('-d, --detail', 'Detailed METAR')
 .parse(process.argv);

if (program.args && program.args[0] && program.args[0].length === 4) {
    fetchMETAR(program.args[0])
        .then(json => {
            if (program.detail) {
                console.log(json);
            } else {
                console.log(json['Raw-Report']);
            }
        })
        .catch(err => {
            console.error(err);
        });
} else {
    console.log('Airport identifier mus be supplied in 4 character ICAO code');
}
