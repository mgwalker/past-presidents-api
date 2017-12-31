const timediff = require('timediff');
const util = require('../util');

module.exports = function partyStats(presidents) {
  const parties = { };
  let totalDays = 0;

  for (const president of presidents) {
    if (!parties[president.party]) {
      parties[president.party] = {
        name: president.party,
        presidents: 0,
        days: 0
      };
    }

    const party = parties[president.party];
    party.presidents += 1;

    const termLength = timediff(president.termStart, president.termEnd, 'D');
    party.days += termLength.days;
    totalDays += termLength.days;
  }

  for (const president of presidents) {
    const party = parties[president.party];
    president.party = {
      name: party.name,
      totalPresidents: party.presidents,
      percentPresidents: util.round(party.presidents / presidents.length, 4),
      totalDays: party.days,
      percentDays: util.round(party.days / totalDays, 4)
    };
    president.partySort = president.party.totalDays;
    president.sortBy = 'partySort';
  }

  return presidents;
};
