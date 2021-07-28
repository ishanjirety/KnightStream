import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

import {Protected} from './ProtectedRoute'
import {useAuth} from './Context'
import {getToken,removeToken} from './Token' 

import {Nav,Splashscreen} from './Comonents'
import {Login,Playlist,Explore,Videodisplay,Liked,Home,NotFound404,PlaylistDisplay,Account,Signup,Forgotpassword} from './Pages'
import {Routes,Route,useNavigate} from 'react-router-dom'

function App() {
  
  // Set Splashscreen Anmation & Visibility
  const [splashScreen,setSplashscreen] = useState("")
  const [SplashscreenDisplay,setSplashscreenDisplay] = useState(true)
  const {setLoggedin} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    (async function setData(){
        const token = getToken()
        try{
          if(token !== null){
            const headers = {
              headers: { 
              'Authorization': token.token, 
            }
          }
            const response = await axios.post('https://KnightStream.ishanjirety.repl.co/api/searchuser',{},headers)  
            response.data.status ===200 ?  setLoggedin(true) : setLoggedin(false)
        }
        else{
          setLoggedin(false)
        }
        }catch(e){
          console.log(e)
          if(axios.isAxiosError(e)){
            if(e.response.status === 401){
              removeToken()
              await setLoggedin(false)    
              navigate('/login')      
            }
          }
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
        <Protected path="/video/:videoId" element={<Videodisplay/>}/>
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
