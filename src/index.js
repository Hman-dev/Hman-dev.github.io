import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// c'est ici que l'on va pointer toute notre appi avec l'id "root" contenu dans la div index.html
// et on appelle le composant App. render = rendu 

