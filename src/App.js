import {useState} from 'react'
import './App.css';
import {Nav,Splashscreen} from './Comonents'
import {Playlist,Home,Videodisplay} from './Pages'

// Context
import {useRoute} from './Context'
 
function App() {

  const arr =[1,2,3,4,5,6,7,8,9,10]

  // Custom Hook
  const {route} =useRoute()

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
      {route==="playlist" &&<Playlist value={arr}/>}
      {route ==="home" && <Home/>}
      {route ==="video" && <Videodisplay/>}
      
      {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>}
    </div>
  );
}

export default App;
