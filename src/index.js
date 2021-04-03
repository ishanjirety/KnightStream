import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Video,Playlist,Toast} from './Context'

ReactDOM.render(
<React.StrictMode>
<Toast>
  <Playlist>    
      <Video>
          <Router>
              <App />
            </Router>
      </Video>
  </Playlist>    
</Toast>
</React.StrictMode>,
  document.getElementById('root')
);
