const util = require('../util');

module.exports = function electionStats(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.elections = out.elections.map((election) => {
      const local = election;
      local.electoralPct = util.round(local.electoralVotes / local.possibleElectoralVotes, 4);
      return local;
    });
    out.sortBy = 'elections.elecoralPct';
    return out;
  });
};
