
const fetch = require('isomorphic-fetch');

function fetchMETAR(ICAOCode) {
    return fetch('https://avwx.rest/api/metar/' + ICAOCode).then(res => res.json());
}

function fetchTAF(ICAOCode) {
    return fetch('https://avwx.rest/api/taf/' + ICAOCode).then(res => res.json());
}

exports.fetchMETAR = fetchMETAR;
exports.fetchTAF = fetchTAF;
