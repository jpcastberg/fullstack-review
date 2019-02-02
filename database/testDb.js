var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('I think I connected');
  var personSchema = new mongoose.Schema({
    age: Number,
    name: String
  });
  personSchema.methods.headbang = function() {
    console.log(`${this.name} headbangs wildly! Look out, fam!`)
  }
  var Person = mongoose.model('Person', personSchema);
  var john = new Person({name: 'John', age: 27});
  Person.insertMany([{name: 'Lawrence', age: 25},{name: 'Dave', age: 106},{name: 'duplicateAge', age: 27}])
  Person.find((err, people) => {
    if (err) return console.error(err);
    console.log(people);
  });
});
