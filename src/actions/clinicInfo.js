import axios from "axios"
import urlcat from "urlcat"
import {GET_CLINICS, CLINIC_ERROR, GET_CLINIC_BY_ID} from "./types"


const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"

//Get all clinic info

export const getClinics = () => async dispatch => {
    try {
        const url = urlcat(BACKEND, "/clinic")
        const res = await axios.get(url)

        dispatch({
            type: GET_CLINICS,
            payload: res.data
        })
        console.log("data has been received")
    } catch (err) {
        dispatch({
            type: CLINIC_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Get clinic info by clinic id

export const getClinicById = clinicId => async dispatch => {
    try {
        const url = urlcat(BACKEND, `/clinic/${clinicId}`)
        const res = await axios.get(url)
        dispatch({
            type: GET_CLINIC_BY_ID,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CLINIC_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}