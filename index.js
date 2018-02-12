#! /usr/bin/env node
const { fetchMETAR, fetchTAF } = require('./lib/fetchavweather');
const program = require('commander');
const path = require('path');
const pkg = require(path.join(__dirname, 'package.json'));

program
 .version(pkg.version)
 .arguments('[icao]')
 .option('-d, --detail', 'Detailed METAR')
 .option('-t, --taf', 'Terminal Area Forcasts')
 .parse(process.argv);

if (program.args && program.args[0] && program.args[0].length === 4) {
    if (program.taf) {
        console.log('Requested a TAF');
        fetchTAF(program.args[0])
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
    } else { // is a metar
        console.log('Requested a METAR');
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
    }
    
} else {
    console.log('Airport identifier mus be supplied in 4 character ICAO code');
}
