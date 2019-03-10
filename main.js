// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const getPresidentsWithActions = require('./lib/getPresidentsWithActions');

const presidentsList = require('./presidents.json');

const app = express();

app.get(/.*/, (req, res) => {
  const requestActions = req.url.split('/').filter(bit => bit.length > 0 && bit !== 'api');
  res.send(getPresidentsWithActions(requestActions, presidentsList));
});

app.listen(process.env.PORT || 8000);
