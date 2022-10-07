// components
import FileDrop from './components/FileDrop'
import Logo from './logo.png'

// CSS
import './App.css';

function App() {
  const xml = "<XML>"

  return (
    <div className="App">
      <header className="header flex-center">
        <div className="header-container">
          <img className="logo" src={Logo} alt="XML to SQL Conversion"/>
          <div className="flex-center">
            <a className="lnk" href="https://www.parkersatterfield.com/contact" target="blank">Contact Me</a>
            <a className="btn" href="https://github.com/parkersatterfield/xmlbatch#readme" target="blank">How It Works</a>
          </div>
        </div>
      </header>
      <div className="body">
        <div className="main">
          <div className="headline">
            <h1>Convert <span className="pop">{xml}</span> tables to a <span className="pop">SQL</span> database file</h1>
            <h4>The only free tool to help data teams convert new clients faster</h4>
          </div>
          <FileDrop />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <h5>
            Created & Licensed by Parker Satterfield
          </h5>
          <h6>
            ©️ All Rights Reserved
          </h6>
        </div>
      </footer>
    </div>
  );
}

export default App;
