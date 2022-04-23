import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getAppointments } from "../actions/appointments"
import AppointmentItems from "./ApptItems"
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"

const Appointments = () => {
    const [appts, setAppts] = useState([])

    useEffect(() => {
        fetch(urlcat(BACKEND, "/appt"))
        .then((response) => response.json())
        .then((data) => setAppts(data))
    }, [appts.length])

    console.log(appts)

    // useEffect(() => {
    //     getAppointments()
    // }, [getAppointments])

    return(
        <div className="appt-container">
            <div className="appt-header">
            <h1>Appointments</h1>
            </div>
            <div class="appt-details">
                <br />
                {appts !== null && appts.length !== 0 ? (
                    <div class="details">
                        <AppointmentItems appointment={appts} />
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