const express = require('express')
const cors = require('cors')

const app = express()

//@desc for body parsing
app.use(express.json())

// @desc to prevent Cross-Origin Resource Sharing error
app.use(cors())

//@desc Importing Databases
const database = require('./database')
let {videoList,playlists,liked,saved} = database


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

