import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './commonJS-training/filter'
import './commonJS-training/find'
import './commonJS-training/map'
import './commonJS-training/reduce'
import './commonJS-training/simple_methods'
import './commonJS-training/promises'
import './commonJS-training/es8'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiTest: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/5')
      .then(resp => resp.json())
      .then(data => this.setState({apiTest: data}))
      .catch(error => console.log('ERROR!', error))
  }

  render() {
    const {apiTest} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p> 5rd person from swapi people is
            <span className={"pl-2"} style={{color: apiTest.hair_color}}>
              {apiTest.name}
            </span>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
