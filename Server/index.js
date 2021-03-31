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
app.get('/api/videolist',(req,res)=>{
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

// @route saved operations
app.get("/api/saved",(req,res)=>{
    res.json({
        status:200,
        saved:saved,
    })
}) 


app.listen(4444,()=>{
    console.log("listening on port 4444")
})


