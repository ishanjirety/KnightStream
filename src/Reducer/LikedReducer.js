export function LikedReducer(state,action){
    switch(action.type){
        case "ADD-TO-LIKED":
             return {...state,count:state.count+1,likedvideos:[...state.likedvideos,{...action.payload,isLiked:true}]};
        case "REMOVE-FROM-LIKED":
            return {...state,count:state.count-1,likedvideos:state.likedvideos.filter((item)=>item.id!=action.payload.id)};
        case "REFRESH-LIKED":
            return action.payload
    }
}