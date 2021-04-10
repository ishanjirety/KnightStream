import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

import {Protected} from './ProtectedRoute'
import {useAuth} from './Context'
import {getToken} from './Token' 

import {Nav,Splashscreen} from './Comonents'
import {Login,Playlist,Explore,Videodisplay,Liked,Home,NotFound404,PlaylistDisplay,Account} from './Pages'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  // Custom Hook
  // const {route} =useRoute()

  // Set Splashscreen Anmation & Visibility
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)
  const {loggedIn,setLoggedin} = useAuth()

  useEffect(()=>{
    (async function setData(){
        const token = getToken()
        if(token !== null){
            const response = await axios.post('http://127.0.0.1:4444/api/searchuser',{token:token.token})  
            console.log(response.data)
            response.data.status ===200 ?  setLoggedin(true) : setLoggedin(false)
        }
        else{
          setLoggedin(false)
        }
    })()
  },[])
  

  // Splash Screen Timeout
  setTimeout(()=>{
    setSplashscreen("fadeout")
    setTimeout(()=>setSplashscreenDisplay(false),4500)
  },4000)
  

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Protected path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/video/:videoId" element={<Videodisplay/>}/>
        <Protected path="/liked-videos" element={<Liked/>}/>
        <Protected path="/playlist" element={<Playlist/>}/>
        <Protected path="/account" element={<Account/>} />
        <Route path="/playlist/:playlistId" element={<PlaylistDisplay/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<NotFound404/>}/>

        
      </Routes>
      {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>}
      
    </div>
  );
}

export default App;
