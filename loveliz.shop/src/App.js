import React, { Component } from 'react';
import './App.css';
import { API_BASE_URL } from './lib/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      _id: "",
      a: ""
   }
  }
    callAPI() {
      fetch(API_BASE_URL)
        .then( res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(err => err);
      }

    componentWillMount() {
      this.callAPI();
    }

  render() {
    return (
      <div className='App'>
        <div>
          <h1>{this.state.apiResponse}</h1>
        </div>
      </div>
    )
  }
}

export default App;
