const util = require('../util');

module.exports = function electionStats(presidents) {
  return presidents.map((president) => {
    const out = president;
    out.largestElectoralWin = 0;
    out.elections = out.elections.map((election) => {
      const local = election;
      local.electoralPct = util.round(local.electoralVotes / local.possibleElectoralVotes, 4);
      if (local.electoralPct > out.largestElectoralWin) {
        out.largestElectoralWin = local.electoralPct;
      }
      return local;
    });
    out.sortBy = 'largestElectoralWin';
    return out;
  });
};
