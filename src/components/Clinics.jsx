import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { getClinic } from "../actions/clinicInfo"
import ClinicItems from "./ClinicItems"

const Clinics = ({getClinic, clinic: {clinics}}) => {
    useEffect(() => {
        getClinic()
    }, [getClinic])

    return(
        <div className="clinic-container">
            <div className="clinic-heading">
                <h1>Clinic Information</h1>
            </div>
            {
                clinics != null ? (
                    clinics.map(clinic => (
                        <Card title="clinic" hoverable><ClinicItems key={clinic._id} clinic={clinic} /></Card>
                    ))
                ) : <h4>No profiles found</h4>
            }
        </div>
    )
}



export default Clinics