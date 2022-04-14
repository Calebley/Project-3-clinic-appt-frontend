import axios from "axios"
import urlcat from "urlcat"
import setAuthToken from "../utils/setAuthToken"
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./types"

const BACKEND = process.env.REACT_APP_BACKEND

//Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
}

//Register user

export const register = ({ name, username, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, username, password })
    try {
        const url = urlcat(BACKEND, "./api/users")
        const res = await axios.post(url, body, config)

        dispatch({type: REGISTER_USER_SUCCESS,
                  payload: res.data  
        })
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(alert(error.msg, "danger")))
        }

        dispatch({
            type: REGISTER_USER_FAIL
        })
    }
}

//Login User
export const login = (username, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ username, password })
    try {
        const url = urlcat(BACKEND, "/api/authUser")
        const res = await axios.post(url, body, config)

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(alert(error.msg, "danger")))
        }
        dispatch({
            type: LOGIN_USER_FAIL
        })
    }
}