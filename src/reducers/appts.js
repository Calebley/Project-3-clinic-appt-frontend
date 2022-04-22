import { GET_APPOINTMENTS, ADD_APPOINTMENTS, GET_APPOINTMENTS_BY_ID, UPDATE_APPOINTMENTS, APPOINTMENT_ERROR } from "../actions/types";

const initialState = {
    appointments: null,
    apptById: null,
    error: {}
}

const appts = (state=initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case GET_APPOINTMENTS:
        case ADD_APPOINTMENTS:
            return {
                ...state,
                appointments: payload
            }
        case GET_APPOINTMENTS_BY_ID:
            return {
                ...state,
                apptById: payload
            }
        case APPOINTMENT_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default appts