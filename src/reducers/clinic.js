import {GET_CLINICS, CLINIC_ERROR, GET_CLINIC_BY_ID} from "../actions/types"

const initialState = {
    clinicById: [],
    clinic: null,
    clinics: [],
    error: {}
}

const clinic = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_CLINICS:
            return {
                ...state,
                clinics: payload
            }
        case GET_CLINIC_BY_ID:
            return {
                ...state,
                clinicById: payload
            }
        case CLINIC_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default clinic
