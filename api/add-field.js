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

module.exports.birthday = function addBirthday(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.birthday = util.getDateString(president.born);
    out.sortBy = 'born';
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
