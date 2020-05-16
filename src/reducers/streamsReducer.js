import actionTypes from "../actions/types"

const INITIAL_STATE = {
    streams: []
}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case actionTypes.CREATE_STREAM:
            return {
                ...state, 
                streams: [...state.streams, action.payload]
            }
        case actionTypes.GET_STREAMS:
            return {
                ...state,
                streams: action.payload
            }
        case actionTypes.GET_STREAM:
            return {
                ...state,
                stream: action.payload
            }
        case actionTypes.EDIT_STREAM:
            return {
                ...state, 
                streams: state.streams.map(el => {
                    return el.id === action.payload.id ? action.payload.data : el
                })
            }
        case actionTypes.DELETE_STREAM:
            return {
                ...state, 
                streams: state.streams.filter(el => {
                    return el.id !== action.payload.id
                })
            }         
        default:
            return state
    }
}