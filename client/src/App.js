import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/.netlify/functions/server/api/hello')
      .then(res => res.json())
      .then(data => setData({ data: data.express}));
  }, []);

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
      </header>
      <p>{data ? data.data : "Loading..."}</p>
    </div>
  );
}

export default App;
