const got = require('got');

const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleReceivedResponse);


// got(url)
//   .then((response) => {
//     console.log(response.body);
//   });
