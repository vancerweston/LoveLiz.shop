import React, { Component } from 'react';
import './App.css';
import { API_BASE_URL } from './lib/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      items: [],
      isLoaded: false
     }
   
    }

    componentDidMount() {
      fetch(API_BASE_URL)
      .then( res => res.json())
      .then(json => {
        this.setState({ 
          isLoaded: true,
          items: json
         })
      })
      .catch(err => err);
    }

  render() {

    let { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Products Loading...</div>;
    } else {
      return (
        <div className='App'>
          <ul>
            {items.map(item => (
              <li key={item._id}>
                {item.a}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default App;
