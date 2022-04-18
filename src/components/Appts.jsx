import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getAppointments } from "../actions/appointments"
import AppointmentItems from "./ApptItems"


const Appointments = ({getAppointments, authUser: {user}, appointment: {appointments}}) => {
    useEffect(() => {
        getAppointments()
    }, [getAppointments])

    return(
        <div className="appt-container">
            <div className="appt-header">
            <h1>Appointments</h1>
            <h2>{user && (user.name.split(" ")[0].toLocaleUpperCase())}'s appointments</h2>
            </div>
            <div class="appt-details">
                <br />
                {appointments !== null && appointments.appointments.length !== 0 ? (
                    <div class="details">
                        <AppointmentItems appointment={appointments.appointments} />
                    </div>
                ) : (
                    <h4>No appointments found</h4>
                    )   
                }
            </div>
        </div>
    )
}

Appointments.propTypes = {
    getAppointments: PropTypes.func.isRequired,
    authUser: PropTypes.object.isRequired,
    appointment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authUser: state.authUser,
    appointment: state.appointment
})

export default connect(mapStateToProps, {getAppointments}) (Appointments)