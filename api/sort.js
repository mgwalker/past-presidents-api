module.exports = function sort(presidents) {
  return presidents.sort((presidentA, presidentB) => {
    if (presidentA.sortBy) {
      const sortBy = presidentA.sortBy;
      return (presidentA[sortBy] > presidentB[sortBy]) ? -1 : 1;
    }
    return (presidentA > presidentB) ? -1 : 1;
  });
};
