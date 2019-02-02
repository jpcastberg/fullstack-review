const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const saveDataToDB = require('../database/index.js').save;
const filterValues = require('../helpers/databaseHelpers.js').filterValues;

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text({type:"*/*"}));
// app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  let username = req.body;
  let successfulGithubGETHandler = (err, githubRes, body) => {
    if (err) return console.error(err);
    let userRepos = JSON.parse(body).map(filterValues);
    saveDataToDB(userRepos, (err) => {
      if (err) {
        console.error(err);
        res.status(500).end();
        return;
      }
      console.log('Data successfully posted!')
      res.status(201).end();
    });
    
  }
  getReposByUsername(username, successfulGithubGETHandler);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

