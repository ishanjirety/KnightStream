export function SavedReducer(state,action){
    switch(action.type){
        case "ADD-TO-SAVED":
            return {...state,savedvideos:[...state.savedvideos,{...action.payload,isSaved:true}]}
        case "REMOVE-FROM-SAVED":
        console.log(action.payload)
            return {...state,savedvideos:state.savedvideos.filter((video)=>video.id !== action.payload.id)}
        case "REFRESH-STATE":
            return action.payload
        default:
            return state
    }
}