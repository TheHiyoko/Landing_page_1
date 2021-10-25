import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index/App';
import Nav from './components/navbar/navbar'


ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


