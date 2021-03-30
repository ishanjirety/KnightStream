import {useState} from 'react'
import './App.css';
import {Nav,Videocard,Splashscreen,Playlistcard} from './Comonents'
import playlist from './Common-Assets/Playlist.svg'
function App() {
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)
  setTimeout(()=>{
    setSplashscreen("fadeout")
    setTimeout(()=>setSplashscreenDisplay(false),4500)
},4000)
  
  return (
    <div className="App">
      <Nav/>
      <div className="main-body">
        <div className="heading"><img src={playlist}/>Playlists</div>
       <Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text="Lectures"/>
      <Playlistcard source="https://pbs.twimg.com/media/DxslfAyX4AU1c0o.jpg" text="Tip & Tricks"/>
      <Playlistcard source="https://i.ytimg.com/vi/jRmiVObwh8k/maxresdefault.jpg" text="Positional Chess"/>
      <Playlistcard source="http://chessterra.com/wp-content/uploads/2019/07/tAEdKVLgURI-800x500.jpg" text="4 step ahead"/>
      <Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text="Lectures"/>
      <Playlistcard source="https://pbs.twimg.com/media/DxslfAyX4AU1c0o.jpg" text="Tip & Tricks"/>
      <Playlistcard source="https://i.ytimg.com/vi/jRmiVObwh8k/maxresdefault.jpg" text="Positional Chess"/>
      <Playlistcard source="http://chessterra.com/wp-content/uploads/2019/07/tAEdKVLgURI-800x500.jpg" text="4 step ahead"/>
      {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>}
      </div>
    </div>
  );
}

export default App;
