const MONTHNAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

module.exports.getDateString = function getDateString(ts) {
  if (ts) {
    const date = new Date(ts);
    return `${MONTHNAMES[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  }
  return null;
};

module.exports.getDurationString = function getDurationString(timediff) {
  const { years, months, weeks } = timediff;
  const days = timediff.days + (weeks * 7);
  return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}`;
};

module.exports.round = function round(number, decimals) {
  const mover = Math.pow(10, decimals); // eslint-disable-line no-restricted-properties
  return Math.round((number * mover)) / mover;
};
