import streams from '../../apis/streams'
import actionTypes from "../types"
import history from "../../history"

export const createStream = (form) => async (dispatch, getState) => { // POST
    const {auth: {currentUser: {id}}} = getState();
    const res = await streams.post('/streams', {...form, userId: id});
    // Programmatically navigate to /streams once we get the response from server. 
    // This is where we do our navigation after we do server changes, since our action creators don't return anything.s
    history.push("/streams"); 
    dispatch({type: actionTypes.CREATE_STREAM, payload: res.data})
}

export const getStreams = () => async dispatch => { // GET
    const res = await streams.get('/streams');
    dispatch({type: actionTypes.GET_STREAMS, payload: res.data})
}

export const getStream = (id) => async dispatch => { // GET
    await streams.get(`/streams/${id}`);
    dispatch({type: actionTypes.GET_STREAM, payload: id})
}

export const editStream = (id, form) => async dispatch => { // PUT
    const res = await streams.put(`/streams/${id}`, form);
    dispatch({type: actionTypes.EDIT_STREAM, payload: {id, data: res.data}})
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: actionTypes.DELETE_STREAM, payload: id})
}
