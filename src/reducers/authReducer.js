import actionTypes from "../actions/types"

const INITIAL_STATE = {
    signedIn: null, 
    currentUser: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case actionTypes.SIGNIN: 
            return {
                ...state, 
                signedIn: true, 
                currentUser: action.payload
            }
        case actionTypes.SIGNOUT:   
            return {
                ...state, 
                signedIn: false, 
                currentUser: null
            }
        default: 
            return state
    }
}