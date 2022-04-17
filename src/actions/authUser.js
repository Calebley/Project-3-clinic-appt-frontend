import axios from "axios"
import urlcat from "urlcat"
import setAuthToken from "../utils/setAuthToken"
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./types"

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"

//Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
}

//Register user

export const register = ({ username, email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ username, email, password })
    try {
        const url = urlcat(BACKEND, "/register")
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
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const url = urlcat(BACKEND, "/login")
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