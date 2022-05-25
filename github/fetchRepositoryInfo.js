const got = require('got');

const fetchRepositoryInfo = (url, callback) => {
  got(`https://api.github.com/repos/${url}`).then((response) => {
    return JSON.parse(response.body);
  }).then(callback);
};

module.exports = fetchRepositoryInfo;

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});