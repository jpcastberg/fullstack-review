let filterValues = (repo) => {
  let filtered = {};
  filtered.repoId = repo.id;
  filtered.creator = repo.owner.login;
  filtered.createdAt = new Date(repo.created_at);
  filtered.repoName = repo.name;
  filtered.url = repo.html_url;
  filtered.description = repo.description;
  return filtered;
}
module.exports.filterValues = filterValues;

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
//   repoId: Number,
//   creator: String,
//   repoName: String,
//   url: String,
//   description: String,
//   forks_count: Number
// });
