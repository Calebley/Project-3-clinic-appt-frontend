import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getAppointments } from "../actions/appointments"
import AppointmentItems from "./ApptItems"


const Appointments = ({getAppointments, appointment: {appointments}}) => {
    useEffect(() => {
        getAppointments()
    }, [getAppointments])

    return(
        <div className="appt-container">
            <div className="appt-header">
            <h1>Appointments</h1>
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
    appointment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    appointment: state.appointment
})

export default connect(mapStateToProps, {getAppointments}) (Appointments)