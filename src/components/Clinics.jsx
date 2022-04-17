import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { getClinic } from "../actions/clinicInfo"

const Clinics = () => {
    useEffect(() => {
        getClinic()
    }, [getClinic])

    return(
        <div className="clinic-container">
            <h1>Clinic Information</h1>
            <Link to={`/clinic/1`}>
            <Card
                title="Clinic 1"
                hoverable
            >
                <p>Clinic Name:</p>
                <p>Clinic Address:</p>
                <p>Doctors Available:</p>
            </Card>
            </Link>
        </div>
    )
}



export default Clinics