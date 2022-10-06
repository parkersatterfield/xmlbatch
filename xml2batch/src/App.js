// components
import FileDrop from './components/FileDrop'
import Export from './components/Export'

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">
        <header className="header">
          <h1>XML to SQL</h1>
          <div>
            <a href="https://www.parkersatterfield.com/contact">Contact Me</a>
            <button>Buy Me a Coffee</button>
          </div>
        </header>
        <div className="main">
          <div className="headline">
            <h1>Convert XML tables to a SQL batch file</h1>
            <h4>The only free tool to help data teams convert new clients faster</h4>
          </div>
          <FileDrop />
        </div>
      </div>
    </div>
  );
}

export default App;
