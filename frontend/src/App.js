import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = { number: 0}

  test = async () => {
    const response = await fetch('http://localhost:5000/');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body.pageCount;
  }

  componentDidMount() {
    this.test().then(res => this.setState({number: res}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.number}</p>
        </header>
      </div>
    );
  }
}

export default App;
