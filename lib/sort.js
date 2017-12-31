module.exports = function sort(presidents) {
  return presidents.sort((presidentA, presidentB) => {
    if (presidentA.sortBy) {
      const sortBy = presidentA.sortBy;
      if (presidentA[sortBy] > presidentB[sortBy]) {
        return -1;
      } else if (presidentA[sortBy] < presidentB[sortBy]) {
        return 1;
      }
      return 0;
    }
    return (presidentA > presidentB) ? -1 : 1;
  });
};
