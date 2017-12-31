const actions = require('./actions');

const displayableFields = [
  'name', 'age', 'fullAge', 'birthday', 'deathday', 'photo',
  'termLength', 'started', 'ended', 'party',
  'elections'];

const displayable = presidents => presidents.map((president) => {
  const out = { };
  for (const field of displayableFields) {
    if (president[field]) {
      out[field] = president[field];
    }
  }
  return out;
});

module.exports = (actionsToApply, presidentsList) => {
  let result = [...presidentsList];

  // Supply self-documentation
  if (actionsToApply.includes('doc')) {
    return actions;
  }

  for (const action of actionsToApply) {
    const knownAction = actions.find(act => act.names.includes(action.toLowerCase()));
    if (knownAction) {
      result = knownAction.apply(result);
    }
  }

  if (actionsToApply.includes('raw')) {
    // If the actions include "raw", send back everything.
    return result;
  } else if (actionsToApply.length === 0) {
    // If there aren't any actions, only send back names.
    return result.map(president => ({ name: president.name }));
  }

  return displayable(result);
};
