const party = require('./party');

module.exports = function stats(presidents) {
  if (presidents.length > 0) {
    const statField = presidents[0].statField;

    switch (statField) {
      case 'party':
        return party(presidents);

      default:
        return presidents;
    }
  }
  return presidents;
};
