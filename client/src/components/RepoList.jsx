import React from 'react';

const RepoList = (props) => {
  let renderedRepos = props.repos.map((repo, idx) => {
    let description = repo.description || 'No Description';
    return (<div className="repo" key={idx}>
      <span className="identifier">{idx + 1}: </span>
      <a href={repo.url}>{repo.repoName} </a>
      <div>
        <span className="identifier">Created By: </span>
        <span>{repo.creator}</span>
        <div>{description}</div>
        <span className="identifier">Created: </span>
        <span>{moment(repo.createdAt).fromNow()}</span>
      </div>
    </div>)
  })
  return (<div>
    <br></br>
    <strong>Here are the {props.repos.length} newest repos in the database:</strong>
    {renderedRepos}
  </div>)
}

export default RepoList;

// _id:
// "5c561bef7eaf5e88d09caf6a"
// createdAt:
// "2019-01-28T00:18:40.000Z"
// creator:
// "jpcastberg"
// description:
// null
// repoId:
// 167874266
// repoName:
// "movie-list"
// url:
// "https://github.com/jpcastberg/movie-list"