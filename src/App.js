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
      fifthPerson: [],
      peopleList: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/5')
      .then(resp => resp.json())
      .then(data => this.setState({fifthPerson: data}))
      .catch(error => console.log('ERROR! with fifth person from people list', error));

    fetch('https://swapi.co/api/people/')
      .then(resp => resp.json())
      .then(data => this.setState({peopleList: data.results}))
      .catch(error => console.log('ERROR with people list', error))
  }

  render() {
    const {fifthPerson, peopleList} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p> 5rd person from swapi people is
            <span className={"pl-2"} style={{color: fifthPerson.hair_color}}>
              {fifthPerson.name}
            </span>
          </p>
          <ul><h2>First page of Star Wars People list:</h2>
            {peopleList.map((people, key) =>
              <li className={"non-dec"} key={key}>{people.name}</li>
              )}
          </ul>
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
