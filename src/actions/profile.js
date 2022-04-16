import axios from "axios"
import urlcat from "urlcat"
import { GET_PROFILE, PROFILE_ERROR } from "./types"

const BACKEND = process.env.REACT_APP_BACKEND

//Create or update user profile

export const createProfile = (formData, history, edit=false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const url = urlcat(BACKEND, "/api/profile")
        const res = await axios.post(url, formData, config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        dispatch(alert(edit ? "Profile Updated" : "Profile Created", "success"))

        if(!edit){
            history.push("/profile")
        }
    } catch (err) {
        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(alert(error.msg, "danger")))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}