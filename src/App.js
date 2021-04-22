
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import { useTable } from 'react-table';

import fetch from './utils/fetch';

function App() {

  fetch.retreiveEmployees()
    .then((data) => {
      // console.log(data.data.results);
      let employees = data.data.results;
      console.log(employees);
    });

  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}


export default App;
