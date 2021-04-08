import {useState} from 'react'
import './App.css';
import {Nav,Splashscreen,Toast,PlaylistAction} from './Comonents'
import {Playlist,Explore,Videodisplay,Liked,Home,NotFound404,PlaylistDisplay} from './Pages'
import {Routes,Route} from 'react-router-dom'

// Context
import {useRoute} from './Context'
 
function App() {


  // Custom Hook
  // const {route} =useRoute()

  // Set Splashscreen Anmation & Visibility
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)

  // Splash Screen Timeout
  setTimeout(()=>{
    setSplashscreen("fadeout")
    setTimeout(()=>setSplashscreenDisplay(false),4500)
  },4000)
  
  return (
    <div className="App">
      <Nav/>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/video/:videoId" element={<Videodisplay/>}/>
        <Route path="/liked-videos" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/playlist/:playlistId" element={<PlaylistDisplay/>}></Route>
        <Route path="*" element={<NotFound404/>}/>
        

      </Routes>
      {/* {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>} */}
      
    </div>
  );
}

export default App;
