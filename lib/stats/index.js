const party = require('./party');
const elections = require('./elections');

module.exports = function stats(presidents) {
  if (presidents.length > 0) {
    const statField = presidents[0].statField;

    switch (statField) {
      case 'party':
        return party(presidents);

      case 'elections':
        return elections(presidents);

      default:
        return presidents;
    }
  }
  return presidents;
};
