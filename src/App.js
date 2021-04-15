import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

import {Protected} from './ProtectedRoute'
import {useAuth} from './Context'
import {getToken} from './Token' 

import {Nav,Splashscreen} from './Comonents'
import {Login,Playlist,Explore,Videodisplay,Liked,Home,NotFound404,PlaylistDisplay,Account,Signup,Forgotpassword} from './Pages'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  // Custom Hook
  // const {route} =useRoute()

  // Set Splashscreen Anmation & Visibility
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)
  const {setLoggedin} = useAuth()

  useEffect(()=>{
    (async function setData(){
        const token = getToken()
        if(token !== null){
            const response = await axios.post('https://KnightStream.ishanjirety.repl.co/api/searchuser',{token:token.token})  
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
        <Route path="/" element={<Explore/>}/>
        <Protected path="/home" element={<Home />}/>
        <Route path="/video/:videoId" element={<Videodisplay/>}/>
        <Protected path="/liked-videos" element={<Liked/>}/>
        <Protected path="/playlist" element={<Playlist/>}/>
        <Protected path="/account" element={<Account/>} />
        <Route path="/playlist/:playlistId" element={<PlaylistDisplay/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot-password" element={<Forgotpassword/>}/>
        <Route path="*" element={<NotFound404/>}/>

      </Routes>
      {SplashscreenDisplay && <Splashscreen animation ={splashScreen}/>}
    
      

      
    </div>
  );
}

export default App;
