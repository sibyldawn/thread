const initialState = {
    postId:"",
    authorId:""
}
const UPDATE_POST_ID = "UPDATE_POST_ID";
const UPDATE_AUTHOR_ID = "UPDATE_AUTHOR_ID"


export default function reducer(state = initialState,action){
    let newState = { ...state }
    switch(action.type){
        case UPDATE_POST_ID:
        return {...state, postId: action.payload};
        case  UPDATE_AUTHOR_ID :
        return {...state, authorId: action.payload};
        default:return state
    }
}


export function updateUser(postId) {
    return {
        type: UPDATE_POST_ID,
        payload: postId
    }
}
export function UPDATE_AUTHOR_ID(authorId) {
    return {
        type: UPDATE_AUTHOR_ID,
        payload: authorId
    }
}
