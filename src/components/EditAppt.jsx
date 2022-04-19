import React, { useEffect, useState } from "react"
import { addAppointment, getAppointmentById } from "../actions/appointments"

const EditAppt = ({user: {user}, IndividualClinic, clinicId, history, addAppointment, getAppointmentById}) => {
    const [formData, setFormData] = useState({
        patientname:"",
        age:"",
        date:"",
        description:""
    })

    useEffect(() => {
        getAppointmentById()
        setFormData({
            patientname: user.name,
            age: user.age,
            date: user.date,
            description: user.description
        })
    },[getAppointmentById])

    const {
        patientname,
        age,
        date,
        description
    } = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        addAppointment(formData, history)
    }

    return(
        <div className="edit-container">
            <div className="edit-heading">
                <h1>Edit appointment</h1>
            </div>
            <form onSubmit={e => onSubmit(e)}>
            Patient name:
             <div className="form-group">
                 <input type="text" name="patientname" value={patientname} onChange={e => onChange(e)} />
             </div>
             Age:
             <div className="form-group">
                 <input type="text" name="age" value={age} onChange={e => onChange(e)} />
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
            </form>
        </div>
    )
}

export default EditAppt