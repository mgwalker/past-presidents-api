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

app.get('/api/:firstAction*?', (req, res) => {
  let result = getPresidents();

  // Get all the path action bits
  const requestActions = [];

  if (req.params.firstAction) {
    requestActions.push(req.params.firstAction);
    if (req.params[0]) {
      requestActions.push(...req.params[0].split('/'));
    }
  }

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
  } else if (requestActions.length === 0) {
    res.send(result.map(president => ({ name: president.name })));
  } else {
    res.send(map.displayable(result));
  }
});

app.listen(process.env.PORT || 8000);
