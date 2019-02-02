const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// let db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: Number,
  creator: String,
  repoName: String,
  url: String,
  description: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);
//Repo.index({repoId: 1}, {unique: true})

let saveDataToDB = (data, callback) => {
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(data, (err) => {
    if (err) return console.error(err);
    callback(null, data);
  });
}

module.exports.save = saveDataToDB;

// [
//   // MongoDB adds the _id field with an ObjectId if _id is not present
//   { item: "journal", qty: 25, status: "A",
//       size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
//   { item: "notebook", qty: 50, status: "A",
//       size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
//   { item: "paper", qty: 100, status: "D",
//       size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
//   { item: "planner", qty: 75, status: "D",
//       size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
//   { item: "postcard", qty: 45, status: "A",
//       size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
// ]