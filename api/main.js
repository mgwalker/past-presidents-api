const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');

const util = require('./util');
const actions = require('./actions');
const map = require('./map');

const PRESIDENTS = require('./presidents.json');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/views'));

function getPresidentsWithActions(actionsToApply) {
  let result = JSON.parse(JSON.stringify(PRESIDENTS));

  if (actionsToApply.includes('unclassy')) {
    result.push({
      name: 'Lord Dampnut',
      _photo: 'http://i.imgur.com/JpENkWc.jpg',
      born: -743194800000,
      termStart: 1484892000000,
      _party: 'Republican',
      _elections: [
        {
          year: 2016,
          electoralVotes: 304,
          possibleElectoralVotes: 538
        }
      ]
    });
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

  // Else, send back the filtered view, where we remove
  // the interim fields.
  return map.displayable(result);
}

app.get('/', (req, res) => {
  res.render('index', { actions });
});

app.get(/^\/view\/?.*/, (req, res) => {
  const requestActions = req.url.split('/').filter(bit => bit.length > 0 && bit !== 'view');
  res.render('view', {
    pct() {
      return (val, render) => `${util.round(render(val) * 100, 2)}%`;
    },
    presidents: getPresidentsWithActions(requestActions) });
});

app.use('/static', express.static(path.join(__dirname, '/static')));

app.get(/\/api\/?.*/, (req, res) => {
  const requestActions = req.url.split('/').filter(bit => bit.length > 0 && bit !== 'api');
  res.send(getPresidentsWithActions(requestActions));
});

app.listen(process.env.PORT || 8000);
