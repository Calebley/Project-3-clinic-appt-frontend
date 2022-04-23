import React, { useEffect, useState } from "react"
import { addAppointment, getAppointmentById } from "../actions/appointments"
import { useParams, useNavigate } from "react-router"
import urlcat from "urlcat"

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"
const EditAppt = () => {
    
    const { apptId } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        patientname:"",
        dateofbirth:"",
        gender:"",
        email:"",
        date:"",
        description:""
    })

    // useEffect(() => {
    //     async function fetchData() {
    //     const url = urlcat(BACKEND, `/appt/${apptId}`)
    //       const response = await fetch(url);
      
    //       if (!response.ok) {
    //         const message = `An error has occurred: ${response.statusText}`;
    //         window.alert(message);
    //         return;
    //       }
      
    //       const record = await response.json();
    //       if (!record) {
    //         window.alert(`Record with id ${apptId} not found`);
    //         return;
    //       }
      
    //       setFormData(record);
    //     }
      
    //     fetchData();
      
    //     return;
    //   }, [formData]);

    useEffect(() => {
            const url = urlcat(BACKEND, `/appt/edit/${apptId}`)

        async function fetchData() {
            fetch(url,{credentials: 'include'})
                .then((response) => response.json())
                .then(data => setFormData(data))       

        }
        
        fetchData()
    }, [])

//     console.log(formData)

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

    const handleSubmit = e => {
        e.preventDefault()
        const url = urlcat(BACKEND, `/appt/${apptId}`)
        fetch(url, {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))

        navigate("/")
    }

    return(
        <div className="edit-container">
            <div className="edit-heading">
                <h1>Edit appointment</h1>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
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
             </div>
             <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditAppt