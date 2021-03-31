import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router,Video} from './Context'

ReactDOM.render(
  <React.StrictMode>
  <Video>
       <Router>
          <App />
        </Router>
  </Video>
  </React.StrictMode>,
  document.getElementById('root')
);
