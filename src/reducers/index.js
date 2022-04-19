import { combineReducers } from "redux"
import authUser from "./authUser"
import clinic from "./clinic"

export default combineReducers({
    authUser,
    clinic
})