class Github {

  constructor(api) {
    this.api = api;
  }

  fetch(url) {
    const callback = (response) => { this.repoData = response }
    this.api.fetchRepositoryData(url, callback)
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;

const GithubApi = require('./githubApi');

const api = new GithubApi();

// We inject the instance of `GithubApi`:
const github = new Github(api);

// This method will delegate to `GithubApi.fetchRepositoryData()`
github.fetch('sinatra/sinatra');

// And after a few moments, this should return a JS object with the repo information.
setTimeout(()=> {console.log(github.getRepoData())}, 100);