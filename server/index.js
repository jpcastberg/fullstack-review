const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const db = require('../database/index.js');
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
    db.saveDataToDB(userRepos, (err) => {
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
});

app.get('/repos', function (req, res) {
  //query database for top 25 newest repos
  //respond w/ info from database
  let success = (err, data) => {
    if (err) return console.error(err);
    res.status(200).json(data);
  }
  db.getTop25ByDate(success);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

