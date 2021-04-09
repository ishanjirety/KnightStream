import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Video,Playlist,Toast,Liked,Saved,AuthProvider} from './Context'

ReactDOM.render(
<React.StrictMode>
<AuthProvider>
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
</AuthProvider>
</React.StrictMode>,
  document.getElementById('root')
);
