import actionTypes from "../types"

export const signIn = () => {
    return {
        type: actionTypes.SIGNIN
    }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGNOUT
    }
}