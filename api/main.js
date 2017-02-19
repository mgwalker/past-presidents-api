const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');

const actions = require('./actions');
const map = require('./map');

const PRESIDENTS = require('./presidents.json');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index', { actions });
});

app.use('/static', express.static(path.join(__dirname, '/static')));

function getPresidentsWithActions(actionsToApply) {
  let result = JSON.parse(JSON.stringify(PRESIDENTS));

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

  // Else, send back the filtered view, where we remove
  // the interim fields.
  return map.displayable(result);
}

app.get('/api/:firstAction*?', (req, res) => {
  // Get all the path action bits
  const requestActions = [];

  if (req.params.firstAction) {
    requestActions.push(req.params.firstAction);
    if (req.params[0]) {
      requestActions.push(...req.params[0].split('/'));
    }
  }

  res.send(getPresidentsWithActions(requestActions));
});

app.listen(process.env.PORT || 8000);
