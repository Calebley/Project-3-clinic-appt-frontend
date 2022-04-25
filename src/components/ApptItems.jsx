import React, { useState } from "react"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import urlcat from "urlcat"
import { Card, Row, Col, Input } from "antd"
import { useNavigate } from "react-router"

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"



const AppointmentItems = ({appointment}) => {
    const [appts, setAppts] = useState(appointment)
    
    //This method will delete a record
    const handleDelete = async (id) => {
        console.log("id",id)
        const url = urlcat(BACKEND, `/appt/${id}`)
        const response = await fetch(url, {method: "DELETE", credentials: "include"})

         if( response.status === 200) {
            const newAppts = appts.filter((appt) => appt._id !== id)
            setAppts(newAppts)
         } 
        
    }


    const appointments = appts.map(appt => (
        <div className="appt-desc-container">
            <Row gutter={[16]} className="appt-card-container">
        <Col span={8} key={appt._id} className="appt-items-container">
            <Card hoverable>
            <p><strong>Clinic: </strong>{appt.clinicname}</p>
            <p><strong>Appointment date: </strong> <Moment format="DD/MM/YYYY">{appt.date}</Moment></p>
            <p><strong>Booking id: </strong> {appt.bookingId}</p>
            <p><strong>Description: </strong>{appt.description}</p>
            <input onClick={() => handleDelete(appt._id)} type="button" value="Cancel" style={{ color: "red"}} />
            <Link to={`/appt/edit/${appt._id}`}><button>Edit</button></Link>
            </Card>
        </Col>
        </Row>
        </div>
       
    ))

    return (
        <div>
            {appointments}
        </div>
    )
}



export default AppointmentItems