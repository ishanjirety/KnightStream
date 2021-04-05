import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Video,Playlist,Toast,Liked,Saved} from './Context'

ReactDOM.render(
<React.StrictMode>
<Saved>
  <Liked>
    <Toast>
      <Playlist>    
          <Video>
              <Router>
                  <App />
              </Router>
          </Video>
      </Playlist>    
    </Toast>
  </Liked>
</Saved>
</React.StrictMode>,
  document.getElementById('root')
);
