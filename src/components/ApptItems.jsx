import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Moment from "react-moment"
import { deleteAppointment, getAppointmentById } from "../actions/appointments"

const AppointmentItems = ({ appointment, deleteAppointment }) => {
    const appointments = appointment.map(appt => (
        <div key={appt.id} className="appt-items-container">
            <p><strong>Date:</strong> <Moment format="DD/MM/YYY">{appt.date}</Moment></p>
            <p><strong>Booking id:</strong> {appt.bookingId}</p>
            <p><strong>Description:</strong>{appt.description}</p>
            <button onClick={() => deleteAppointment(appt._id)} type="button">Cancel</button>
            <Link to="/editappt"><button onClick={() => getAppointmentById(appt._id)} type="button">Edit</button></Link>
        </div>
    ))
    return (
        <div>
            {appointments}
        </div>
    )
}

AppointmentItems.propTypes = {
    appointment: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default connect(null, {deleteAppointment})(AppointmentItems)