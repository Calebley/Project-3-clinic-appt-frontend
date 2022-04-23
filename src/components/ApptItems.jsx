import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import Moment from "react-moment"
import { deleteAppointment, getAppointmentById } from "../actions/appointments"
import urlcat from "urlcat"
import { Card, Row, Col, Input } from "antd"

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"
const AppointmentItems = ({appointment}) => {
    
    const handleDelete = (id) => () => {
        const url = urlcat(BACKEND, `/appt/${id}`)
        fetch(url, {method: "DELETE"})
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    
    const appointments = appointment.map(appt => (
        <Row gutter={[32]} className="clinic-card-container">
        <Col span={8} key={appt._id} className="appt-items-container">
            <Card hoverable>
            <p><strong>Date:</strong> <Moment format="DD/MM/YYYY">{appt.date}</Moment></p>
            <p><strong>Booking id:</strong> {appt.bookingId}</p>
            <p><strong>Description:</strong>{appt.description}</p>
            <input onClick={handleDelete(appt.bookingId)} type="button" value="Cancel" style={{ color: "red"}} />
            <Link to={`/editappt/${appt.bookingId}`}><button>Edit</button></Link>
            </Card>
        </Col>
        </Row>
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