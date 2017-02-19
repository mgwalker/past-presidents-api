const displayableFields = [
  'name', 'age', 'fullAge', 'birthday', 'deathday',
  'termLength', 'started', 'ended', 'party',
  'totalInParty', 'partyPercent'];

module.exports.stats = function getStats(presidents) {
  let out = presidents;

  if (presidents.length > 0) {
    const statField = presidents[0].statField;

    switch (statField) {
      case 'party':
        out = out.map((president) => {
          const local = president;
          local.totalInParty = presidents.filter(p => p.party === president.party).length;
          local.partyPercent = Math.round(10000 * (local.totalInParty / presidents.length)) / 10000;
          local.sortBy = 'totalInParty';
          return local;
        });
        break;

      default:
        break;
    }
  }

  return out;
};

module.exports.displayable = function displayable(presidents) {
  return presidents.map((president) => {
    const out = { };
    for (const field of displayableFields) {
      if (president[field]) {
        out[field] = president[field];
      }
    }
    return out;
  });
};
