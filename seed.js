const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books');

// console.log('this runs');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  name: String,
  owner: String,
  html_url: String,
  stargazers_count: Number

  // id - id of the repo
  // html_url - link to the repo
  // name - name of the repo
  // owner - owner of the repo
  // stargazers_count - likes on repo, used for sorting and displaying
});

/*
Example:
{
    "id": 18221276,
    "name": "git-consortium",
    "owner": "octocat",
    "html_url": "https://github.com/octocat/git-consortium",
    "stargazers_count": 7
  }
*/

let Repo = mongoose.model('Repo', repoSchema);

// var sample = new Repo({
//   "id": 18221277,
//   "name": "git-consortium",
//   "owner": "octocat",
//   "html_url": "https://github.com/octocat/git-consortium",
//   "stargazers_count": 7
// })

let save = async (err, data) => {
  if (err) return console.error(err);
  // console.log('success!');
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // construct an array of promises
  // promise all
  // then continue?

  var updates = []

  for (var i = 0; i < data.length; i++) {
    var update = Repo.update(
      { id: data[i].id }, // condition
      {
        "id": data[i].id,
        "name": data[i].name,
        "owner": data[i].owner.login,
        "html_url": data[i].html_url,
        "stargazers_count": data[i].stargazers_count
      }, // doc
      { upsert: true } // options
    ).exec()

  }

  await Promise.all(updates);

  console.log('complete save');
}

module.exports.repo = Repo;
module.exports.save = save;