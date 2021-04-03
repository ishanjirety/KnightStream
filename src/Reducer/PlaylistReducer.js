export function PlaylistReducer(state,action){
    switch(action.type){
        case "ADD-PLAYLIST":
            return action.payload
        case "REMOVE-PLAYLIST":
            return state
        case "ADD-TO-PLAYLIST":
            return state
        case "REMOVE-FROM-PLAYLIST":
            return state
        case "CREATE-PLAYLIST":
            return state
    }
}