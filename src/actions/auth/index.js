import actionTypes from "../types"

export const signIn = (userProfile) => {
    return {
        type: actionTypes.SIGNIN, 
        payload: userProfile
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGNOUT
    }
}