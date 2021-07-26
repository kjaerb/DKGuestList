import React from 'react';
import ReactDOM from 'react-dom';
import logo from './vendor/logo.jpg';
import './style/main.css';
import {ParticipatingGuests, NotParticipatingGuests} from './component/guestlist.js'


function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={logo} alt="dksommerfest2021"/>
        <h1 className="header-text">Gæsteliste til Denice Klarskov's sommerfest 2021</h1>
      </div>
      <div className="guest-list">
        <h2 className="participate-status">Deltager:</h2>
        <ParticipatingGuests />
        <h2 className="participate-status">Deltager ikke:</h2>
        <NotParticipatingGuests />
      </div>
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