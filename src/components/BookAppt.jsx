import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addAppointment } from "../actions/appointments"
import store from "../store";
import { useParams } from "react-router-dom";
import axios from "axios";
import urlcat from "urlcat";
import { useNavigate } from "react-router";



const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"

const BookAppt = () => {
    const[oneClinic, setOneClinic] = useState([])
    const { clinicid, userid } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(urlcat(BACKEND, `/clinic/${clinicid}`))
        .then((response) => response.json())
        .then((data) => setOneClinic(data))
    },[])

    const [formData, setFormData] = useState({
        patientname:"",
        dateofbirth:"",
        gender:"",
        email:"",
        date:"",
        description:"",
        clinicid,
        userid
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newAppt = {...formData}

        const url = urlcat(BACKEND, `/appt/${clinicid}/${userid}`)
        
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(newAppt),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .catch(error => {
            console.log(error)
            return
        })
        .then(setFormData({
            patientname:"",
            dateofbirth:"",
            gender:"",
            email:"",
            date:"",
            description:"",
            clinicid,
            userid,
        }))
        console.log(url)
        console.log(newAppt)
        navigate("/appointment")
        alert("Appointment successfully booked!")
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const newAppt = {
    //         patientname: formData.patientname,
    //         dateofbirth: formData.dateofbirth,
    //         gender: formData.gender,
    //         email: formData.email,
    //         date: formData.date,
    //         description: formData.description,
    //         clinicid: formData.clinicid,
    //         userid: formData.userid
    //     }
    //     const url = urlcat(BACKEND, `/appt/${clinicid}/${userid}`)
    //     console.log(url)
    //     console.log(newAppt)
    //     axios.post(url, newAppt)
    //     navigate("/appointment")
    // }
    
return(
    <div className="booking-container">
         <h1>Book Appointment</h1>
         <div className="appt-clinic">
            <p className="clinic">{oneClinic.name}</p>
         </div>
        <div className="booking-details-container">
         <form onSubmit= {handleSubmit}
            //  addAppointment(clinicById._id, sessUser.id, formData)
         >
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
             Appointment Date:
             <div className="form-group">
                 <input type="date" name="date" value={date} onChange={e => onChange(e)} />
             </div>
             Tell us about your illness
             <div className="form-group">
                 <textarea placeholder="Illness description" name="description" value={description} onChange={e => onChange(e)} ></textarea>
             </div>
             <button className= "submit" type="submit">Submit</button>
             <Link to="/clinics" type="submit">Go back</Link>
         </form>
         </div>
    </div>
)
}

BookAppt.propTypes = {
    addAppointment: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    clinic: state.clinic,
    authUser: state.authUser
})

export default connect(mapStateToProps, {addAppointment}) (BookAppt)