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
        break;
        case actionTypes.GET_STREAMS:
            return {
                ...state,
                streams: action.payload
            }
        break;
        case actionTypes.GET_STREAM:
            return {
                ...state,
                stream: state.streams[action.payload.id]
            }
        break;
        case actionTypes.EDIT_STREAM:
            return {
                ...state, 
                streams: state.streams.map(el => {
                    return el.id === action.payload.id ? action.payload.data : el
                })
            }
        break;
        case actionTypes.DELETE_STREAM:
            return {
                ...state, 
                streams: state.streams.filter(el => {
                    return el.id !== action.payload.id
                })
            }
        break;          
        default:
            return state
            break;
    }
}