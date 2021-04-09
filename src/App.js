import {useState} from 'react'
import './App.css';

import {Protected} from './ProtectedRoute'
import {useAuth} from './Context'

import {Nav,Splashscreen} from './Comonents'
import {Login,Playlist,Explore,Videodisplay,Liked,Home,NotFound404,PlaylistDisplay} from './Pages'
import {Routes,Route} from 'react-router-dom'

 
function App() {


  // Custom Hook
  // const {route} =useRoute()

  // Set Splashscreen Anmation & Visibility
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)
  const {loggedIn} = useAuth()

  // Splash Screen Timeout
  setTimeout(()=>{
    setSplashscreen("fadeout")
    setTimeout(()=>setSplashscreenDisplay(false),4500)
  },4000)
  
  return (
    <div className="App">
      {loggedIn && <Nav/>}    
      <Routes>
        <Protected path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/video/:videoId" element={<Videodisplay/>}/>
        <Protected path="/liked-videos" element={<Liked/>}/>
        <Protected path="/playlist" element={<Playlist/>}/>
        <Route path="/playlist/:playlistId" element={<PlaylistDisplay/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<NotFound404/>}/>
        
      </Routes>
      {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>}
      
    </div>
  );
}

export default App;
