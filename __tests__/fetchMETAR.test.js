
const fetchMETAR = require('../lib/fetchavweather').fetchMETAR;

test('Get METAR for Craig field in Jacksonville, Fl', (done) => {
    fetchMETAR('KCRG').then(metar => {
        expect(metar.Station).toBe('KCRG');
        done();
    });
});