module.exports.dead = function dead(presidents) {
  return presidents.filter(president => president.died < Date.now());
};

module.exports.alive = function alive(presidents) {
  return presidents.filter(president => !president.died);
};

module.exports.diedInOffice = function diedInOffice(presidents) {
  return presidents.filter(president => president.died === president.termEnd);
};
