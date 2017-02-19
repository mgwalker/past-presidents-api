const timediff = require('timediff');
const util = require('./util');

module.exports.age = function addAge(presidents) {
  return presidents.map((president) => {
    const out = president;
    const age = timediff(president.born, president.died || Date.now());
    out.age = age.years;
    out.fullAge = util.getDurationString(age);
    out.ageMilliseconds = ((president.died || Date.now()) - president.born);
    out.sortBy = 'ageMilliseconds';
    return out;
  });
};

module.exports.birth = function addBirthday(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.birthday = util.getDateString(president.born);
    out.sortBy = 'born';
    return out;
  });
};

module.exports.death = function addDeathday(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.deathday = util.getDateString(president.died);
    out.sortBy = 'died';
    return out;
  });
};

module.exports.term = function addTerm(presidents) {
  return presidents.map((president) => {
    const out = president;
    const termLength = timediff(president.termStart, president.termEnd);
    out.termLength = util.getDurationString(termLength);
    out.termMilliseconds = (president.termEnd - president.termStart);
    out.started = util.getDateString(president.termStart);
    out.ended = util.getDateString(president.termEnd);
    out.sortBy = 'termMilliseconds';
    return out;
  });
};

module.exports.party = function addParty(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.party = out._party; // eslint-disable-line no-underscore-dangle
    out.sortBy = 'party';
    out.statField = 'party';
    return out;
  });
};

module.exports.elections = function addElections(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.elections = out._elections; // eslint-disable-line no-underscore-dangle
    out.sortBy = 'elections';
    out.statField = 'elections';
    return out;
  });
};
