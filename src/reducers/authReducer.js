import actionTypes from "../actions/types"

const INITIAL_STATE = {
    signedIn: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case actionTypes.SIGNIN: 
            return {
                ...state, 
                signedIn: true
            }
        case actionTypes.SIGNOUT:   
            return {
                ...state, 
                signedIn: false
            }
        default: 
            return state
    }
}