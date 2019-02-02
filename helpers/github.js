const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;

// Successful user query -> https://api.github.com/users/jpcastberg?access_token=48f72affe68d3f798a96101be1956b61a4462f11

//successful repos query -> https://api.github.com/users/jpcastberg/repos?access_token=48f72affe68d3f798a96101be1956b61a4462f11

// (err, res, body) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   let repos = JSON.parse(body);
//   console.log(repos);
// }