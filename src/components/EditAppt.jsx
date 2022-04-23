import React, { useEffect, useState } from "react"
import { addAppointment, getAppointmentById } from "../actions/appointments"
import { useParams, useNavigate } from "react-router"
import urlcat from "urlcat"

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"
const EditAppt = () => {
    
    const { bookingId } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        patientname:"",
        dateofbirth:"",
        gender:"",
        email:"",
        date:"",
        description:""
    })

    useEffect(() => {
        const id = bookingId.toString()
        const url = urlcat(BACKEND, `/appt/${id}`)
        fetch(url)
        .then((response) => response.json())
        .then((data) => setFormData(data))
    }, [])

    // useEffect(() => {
    //     getAppointmentById()
    //     setFormData({
    //         patientname: appt.name,
    //         dateofbirth: appt.dateofbirth,
    //         gender: appt.gender,
    //         email: appt.email,
    //         date: appt.date,
    //         description: appt.description
    //     })
    // },[getAppointmentById])

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

    const onSubmit = e => {
        e.preventDefault()
        const id = bookingId.toString()
        const url = urlcat(BACKEND, `/appt/update/${id}`)
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))

        navigate("/appointment")
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
             Date of birth:
             <div className="form-group">
                 <input type="date" name="dateofbirth" value={dateofbirth} onChange={e => onChange(e)} />
             </div>
             Gender:
             <div className="form-group">
                 <input type="text" name="gender" value={gender} onChange={e => onChange(e)} />
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
            </form>
        </div>
    )
}

export default EditAppt