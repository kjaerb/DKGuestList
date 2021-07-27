import React from 'react';
import ReactDOM from 'react-dom';
import logo from './vendor/img/logo.jpg';
import './style/main.css';
import UserOptions from './component/options';
import Guests from './component/guests';


function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={logo} alt="dksommerfest2021" />
        <h1 className="header-text">Gæsteliste til DK sommerfest 2021</h1>
      </div>
      <UserOptions />
      <Guests />
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);