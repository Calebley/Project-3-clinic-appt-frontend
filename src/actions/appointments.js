import axios from "axios"
import urlcat from "urlcat"
import { ADD_APPOINTMENTS, APPOINTMENT_ERROR, GET_APPOINTMENTS, GET_APPOINTMENTS_BY_ID, UPDATE_APPOINTMENTS } from "./types"


const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"
//Add appointment

export const addAppointment = (clinicid, userid, formData) => async dispatch => {
    try {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
        const url = urlcat(BACKEND, `/appt/${clinicid}/${userid}`)
        const res = await axios.post(url, formData, config)
        console.log(url)
        dispatch({
            type: ADD_APPOINTMENTS,
            payload: res.data
        })
        dispatch(alert("Appointment successfully booked"))
    } catch (err) {
        console.log(err)
    }
}


//Get appointments

export const getAppointments = () => async dispatch => {
    try {
        const url = urlcat(BACKEND, "/api/authUser")
        const res = await axios.get(url)
        dispatch({
            type: GET_APPOINTMENTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: APPOINTMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Delete appointments

export const deleteAppointment = (appointmentId) => async dispatch => {
    try {
        const url = urlcat(BACKEND, `/api/authUser/${appointmentId}`)
        const res = await axios.delete(url)
        dispatch({
            type: UPDATE_APPOINTMENTS,
            payload: res.data
        })
        dispatch(alert("Appointment successfully removed"))
    } catch (err) {
        dispatch({
            type: APPOINTMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//Get current appointment

export const getAppointmentById = (appointmentId) => async dispatch => {
    try {
        const url = urlcat(BACKEND, `/api/authUser/${appointmentId}`)
        const res = await axios.get(url)
        dispatch({
            type: GET_APPOINTMENTS_BY_ID,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: APPOINTMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}