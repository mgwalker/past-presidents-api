const MONTHNAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

module.exports.getDateString = function getDateString(ts) {
  const date = new Date(ts);
  return `${MONTHNAMES[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
};

module.exports.getDurationString = function getDurationString(timediff) {
  const { years, months, days } = timediff;
  return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}`;
};
