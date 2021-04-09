export function PlaylistReducer(state,action){
    console.log(action)
    switch(action.type){
        case "ADD-PLAYLIST":
            return {...state,count:state.count+1,playlist:[...state.playlist,action.payload]}
        case "REMOVE-PLAYLIST":
            return {...state,count:state.count > 0 ? state.count-1 : 0, playlist:state.playlist.filter(playlist=>playlist.name !== action.payload.name) }
        case "REMOVE-FROM-PLAYLIST":
            console.log(action.payload.name)
            return {...state,playlist:state.playlist.map((playlist)=>playlist.name===action.payload.name ? {...playlist,count:playlist.count > 0 ? playlist.count - 1 : 0,videos:playlist.videos.filter(video=>video.id !== action.payload.data.id)} : playlist)}
        case "ADD-TO-PLAYLIST":
            console.log(action.payload.data.id)
            return {...state,playlist:state.playlist.map(playlist=>playlist.name===action.payload.name ? {...playlist,count:playlist.count+1,videos:[...playlist.videos,action.payload.data]} : playlist)}
            // return {...state,playlist:state.playlist.map((playlist)=>playlist.name === action.payload.name ? {...playlist,count:playlist.count+1,videos:[...playlist.videos,action.payload.data]} : playlist)}
        case "REFRESH-PLAYLIST":
            return action.payload
        default:
            return state
    }
}


// Display playlists videoList
// make sidebar for desktop