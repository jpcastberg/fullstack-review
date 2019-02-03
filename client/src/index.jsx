import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    this.getRepos();
  }

  search (term) {
    $.ajax({
      method: 'POST',
      url: 'https://calm-bastion-97370.herokuapp.com/repos',
      data: term,
      contentType: 'text/html; charset=utf-8',
      type: 'text',
      success: () => {
        console.log(`${term} was searched`);
        this.getRepos();
      }
    });
  }

  getRepos () {
    $.ajax({
      method: 'GET',
      url: 'https://calm-bastion-97370.herokuapp.com/repos',
      success: (data) => {
        console.log('great success');
        this.setState({repos: data});
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));