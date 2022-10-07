// components
import FileDrop from './components/FileDrop'
import Export from './components/Export'
import Logo from './logo.png'

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header flex-center">
        <div className="header-container">
          <img className="logo" src={Logo} alt="XML to SQL Conversion"/>
          <div className="flex-center">
            <a className="lnk" href="https://www.parkersatterfield.com/contact">Contact Me</a>
            <button className="btn">Buy Me a Coffee</button>
          </div>
        </div>
      </header>
      <div className="body">
        <div className="main">
          <div className="headline">
            <h1>Convert <span className="pop">XML</span> tables to a <span className="pop">SQL</span> batch file</h1>
            <h4>The only free tool to help data teams convert new clients faster</h4>
          </div>
          <FileDrop />
        </div>
        <div>
          <Export />
        </div>
      </div>
      <div className="progress">
        <Export/>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <p>
            Created & Licensed by Parker Satterfield
          </p>
          <p>
            ©️ All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
