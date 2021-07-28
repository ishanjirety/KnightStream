const express = require('express')
const cors = require('cors')

const app = express()

//@desc for body parsing
app.use(express.json())

// @desc to prevent Cross-Origin Resource Sharing error
const corsOptions = {
    origin:"https://1rqud.csb.app/",
    optionSuccessStatus:200
  }
app.use(cors(corsOptions))

//@desc Importing Databases
const database = require('./database')
let {videoList,playlists,liked,saved,users} = database


// @route Videolist operatioins
app.get("/api/videolist",(req,res)=>{
    checkStatuses()
    res.json({
        status:200,
        videos:videoList
    })
})

// @route playlists operations
app.get("/api/playlist",(req,res)=>{
    res.json({
        status:200,
        playlists:playlists
    })
})
app.post("/api/playlist/add",(req,res)=>{
    playlists = {...playlists,count:playlists.count+1,playlist:[...playlists.playlist,req.body]}
    res.json({
        status:200,
        comment:`${req.body.name} added to playlists`
    })
})

app.post("/api/playlist/remove",(req,res)=>{
    const request_body = req.body
    console.log(request_body)
    playlists = {...playlists,count:playlists.count > 0 ? playlists.count - 1 : 0, playlist:playlists.playlist.filter(playlist => playlist.name !== request_body.name) }
    res.json({
        status:302,
        comment:`${request_body.name} deleted from playlist`,
        data:playlists
    })
   
})
app.post("/api/playlist/item/add",(req,res)=>{
    const request_body = req.body
    playlists = {...playlists,playlist:playlists.playlist.map((playlist)=>playlist.name === request_body.name ? {...playlist,count:playlist.count+1,videos:[...playlist.videos,request_body.video]} : playlist)}
    res.json({
        status:200,
        comment : `${request_body.video.name} added to ${request_body.name}`,
        data: playlists
    })
})
app.post("/api/playlist/item/remove",(req,res)=>{
    const request_body = req.body
    console.log(request_body)
    playlists = {...playlists,playlist:playlists.playlist.map(playlist=>playlist.name === request_body.name ? {...playlist,count: playlist.count > 0 ? playlist.count-1 : 0, videos:playlist.videos.filter(video => video.id !== request_body.video.id)}:playlist)}
    console.log(playlists)
    res.json({
        status:302,
        comment:`${request_body.video.id} removed from '${request_body.name}`,
        data:playlists
    })
})



// @route liked operations
app.get("/api/liked",(req,res)=>{
    res.json({
        status:200,
        liked:liked
    })
})

app.post("/api/liked/add",(req,res)=>{
    if(liked.likedvideos.find((videos)=>videos.id === req.body.id)===undefined){
    liked={...liked,count:liked.count+1,likedvideos:[...liked.likedvideos,{...req.body,isLiked:true}]}
    }
    res.json({
        status:200,
        comment:`Video ID: ${req.body.id} liked`
    })
})
app.post("/api/liked/remove",(req,res)=>{
       
    liked={...liked,count:liked.count>0 ? liked.count-1 : 0,likedvideos: liked.likedvideos.filter((item)=>item.id!=req.body.id)}
    videoList = videoList.map((video)=>video.id===req.body.id ? {...video,isLiked:false} : video)
    res.json({
        status:302,
        comment:`Video ID: ${req.body.id} removed from liked`
    })
})

// @route saved operations
app.get("/api/saved",(req,res)=>{
    res.json({
        status:200,
        saved:saved,
    })
}) 
app.post("/api/save/add",(req,res)=>{
    if(saved.savedvideos.filter((video)=>video.id===req.body.id).length === 0){
    saved={...saved,count:saved.count+1,savedvideos:[...saved.savedvideos,{...req.body,isSaved:true}]}
    }
    
    else{
            saved={...saved,savedvideos:saved.savedvideos.map((video)=>video.id === req.body.id ? req.body : video)}
        }
        console.log(saved.savedvideos.length)
    // console.log(saved)
    res.json({
        status:200,
        comment:`Video ID: ${req.body.id} saved`
    })
})
app.post("/api/save/remove",(req,res)=>{
    saved={...saved,count:saved.count>0 ? saved.count-1 : 0,savedvideos: saved.savedvideos.filter((item)=>item.id!=req.body.id)}
    videoList = videoList.map((video)=>video.id===req.body.id ? {...video,isSaved:false} : video)
    res.json({
        status:200,
        comment:`Video ID: ${req.body.id} saved`
    })
})

// @route Authentication
app.post('/api/signup',(req,res)=>{
    const request_body = req.body
    users= {...users,count:users.count+1,user:[...users.count,request_body]}
    res.json({
        status:200,
        comment:`user ${request_body.username} added`,
        data:users
    })
})
app.post('/api/login',(req,res)=>{
    const request_body = req.body
    const status = users.user.filter(user=>user.username===request_body.username && user.password===request_body.password).length
    if(status===0){
        res.status(401).json({
            status:401,
            comment:`username ${request_body.username} not found`
        })
        res.end()
    }
    else{
        res.json({
            status:200,
            comment:`username ${request_body.username} found`
        })
    res.end()
}
})
app.post('/api/upDatetoken',(req,res)=>{
    const request_body = req.body
    console.log(request_body.token)
    users = {...users,user:users.user.map(usr=>usr.username === request_body.username ? {...usr,token:request_body.token}:usr)}
    console.log(users)
    res.json({
        status:200,
        comment:`Updated token of ${request_body.username}`        
    })
})
app.post('/api/searchuser',(req,res)=>{
    const request_body = req.body
    console.log(request_body)
    const foundUser = users.user.find(user=>user.token === request_body.token)
    if(foundUser !== undefined){
        res.json({
            status:200,
            comment:`found ${foundUser.username}`
        })
    }
    else{
        res.json({
            status:401,
            comment:`could not find username with token ${request_body.token}`
        })
    }
})
app.post('/api/users/update',(req,res)=>{
    const request_body = req.body
    const user = users.user.find(user=>user.username===request_body.username)
    if(user!== undefined){
        users = {...users,user:users.user.map(user=>user.username===request_body.username ? {...user,password:request_body.password} : user)}
        res.json({
            status:200,
            comment:`${request_body.username} update succssfully`,
            data:users
        })
    }
    else{
        res.json({
            status:403,
            comment:`could not find ${request_body.username}`,
        })
    }
})
app.listen(4444,()=>{
    console.log("listening on port 4444")
})


function checkStatuses(){
    videoList.map((items)=>{
        const FoundItem = liked.likedvideos.find((video)=>items.id===video.id)
        videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isLiked:true} : item) : videoList
        })
        videoList.map((items)=>{
            const FoundItem = playlists.playlist.find((video)=>items.id===video.id)
            videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isInplaylist:true} : item) : videoList
            })

            videoList.map((items)=>{
                const FoundItem = saved.savedvideos.find((video)=>items.id===video.id)
                videoList=FoundItem!=undefined ? videoList.map((item)=>item.id === FoundItem.id ? {...item,isSaved:true} : item) : videoList
                })
}


