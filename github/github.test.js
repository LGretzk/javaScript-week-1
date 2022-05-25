const Github = require('./github');

describe('Github', () => {
  describe('fetch', () => {
    it('calls the fetchRepositoryData of GithubApi', () => {
      const githubApiDouble = {
        fetchRepositoryData: (url, callback) => {
          callback({
            name: 'sinatra/sinatra',
            description: 'Fake description'
          });
        }};

      const github = new Github(githubApiDouble);
      github.fetch('sinatra/sinatra');

      expect(github.getRepoData()).toEqual({
        name: 'sinatra/sinatra',
        description: 'Fake description'
      });
    });
  });
})