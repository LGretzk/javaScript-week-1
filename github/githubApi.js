const got = require('got');

class GithubApi {
  fetchRepositoryData(url, callback) {
    got(`https://api.github.com/repos/${url}`).then((response) => {
      return JSON.parse(response.body);
    }).then(callback);
  }
}

module.exports = GithubApi;