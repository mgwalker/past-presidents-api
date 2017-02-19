const displayableFields = ['name', 'age', 'fullAge', 'birthday', 'deathday', 'termLength', 'started', 'ended'];

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
