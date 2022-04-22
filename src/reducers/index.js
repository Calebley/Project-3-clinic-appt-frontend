import { combineReducers } from "redux"
import authUser from "./authUser"
import clinic from "./clinic"
import appts from "./appts"

export default combineReducers({
    authUser,
    clinic,
    appts
})