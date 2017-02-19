const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');

const actions = require('./actions');
const map = require('./map');

const PRESIDENTS = require('./presidents.json');

function getPresidents() {
  return JSON.parse(JSON.stringify(PRESIDENTS));
}

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('index', { actions });
});

app.use('/static', express.static(path.join(__dirname, '/static')));

app.get('/:firstAction*?', (req, res) => {
  let result = getPresidents();

  // Get all the path action bits
  let firstAction = req.params.firstAction;
  if (!firstAction) {
    firstAction = '';
  }

  let subsequentActions = req.params[0];
  if (subsequentActions) {
    subsequentActions = subsequentActions.split('/');
  } else {
    subsequentActions = [];
  }
  const requestActions = [firstAction, ...subsequentActions];

  // Apply each action them
  for (const action of requestActions) {
    const knownAction = actions.find(act => act.names.includes(action.toLowerCase()));
    if (knownAction) {
      result = knownAction.apply(result);
    }
  }

  // And only send back the displayable parts
  if (requestActions.includes('raw')) {
    res.send(result);
  } else {
    res.send(map.displayable(result));
  }
});

app.listen(process.env.PORT || 8000);
