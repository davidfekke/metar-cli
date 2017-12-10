
const fetch = require('isomorphic-fetch');

function fetchMETAR(ICAOCode) {
    return fetch('https://avwx.rest/api/metar/' + ICAOCode).then(res => res.json());
}

module.exports = fetchMETAR;
