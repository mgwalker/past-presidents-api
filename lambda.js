const getPresidentsWithActions = require('./lib/getPresidentsWithActions');
const presidentsList = require('./presidents.json');

const isProxy = e => (e && e.path);

const getFilters = (e) => {
  if (isProxy(e)) {
    return e.path.split('/').filter(bit => bit.length > 0);
  }
  return [];
};

const getLambdaResponse = (data, e) => {
  let response = data;
  if (isProxy(e)) {
    response = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  }
  return response;
};

module.exports.main = (e, context, callback) => {
  const filters = getFilters(e);
  const presidents = getPresidentsWithActions(filters, presidentsList);
  callback(null, getLambdaResponse(presidents, e));
};
