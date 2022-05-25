const got = require('got');

const fetchJson = (url, callback) => {
  got(url).then(callback);
};

module.exports = fetchJson;