import React, { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addAppointment } from "../actions/appointments"

const BookAppt = ({IndividualClinic, clinicId, history, addAppointment}) => {
    const [formData, setFormData] = useState({
        patientname:"",
        dateofbirth:"",
        gender:"",
        email:"",
        date:"",
        description:""
    })

    const {
        patientname,
        dateofbirth,
        gender,
        email,
        date,
        description
    } = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
return(
    <div className="booking-container">
         <h1>Book Appointment</h1>
         <div className="appt-clinic">
             <p className="clinic">Clinic 1</p>
         </div>
         <form onSubmit={e => {
             e.preventDefault()
             addAppointment(clinicId, formData, history)
         }}>
             Patient name:
             <div className="form-group">
                 <input type="text" name="patientname" value={patientname} onChange={e => onChange(e)} />
             </div>
             Date of birth:
             <div className="form-group">
                 <input type="date" name="dateofbirth" value={dateofbirth} onChange={e => onChange(e)} />
             </div>
             Gender:
             <div className="form-group">
                 <input type="text" name="gender" placeholder="M or F" value={gender} onChange={e => onChange(e)} />
             </div>
             Email:
             <div className="form-group">
                 <input type="email" name="email" value={email} onChange={e => onChange(e)} />
             </div>
             Date:
             <div className="form-group">
                 <input type="date" name="date" value={date} onChange={e => onChange(e)} />
             </div>
             <div className="form-group">
                 <textarea placeholder="Illness description" name="description" value={description} onChange={e => onChange(e)} ></textarea>
                 <small className="form-text">Tell us about the illness</small>
             </div>
             <input type="submit" value="Submit" />
             <Link to="/clinics" type="submit">Go back</Link>
         </form>
    </div>
)
}

BookAppt.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default connect(null, {addAppointment}) (BookAppt)