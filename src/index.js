import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from './Context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
