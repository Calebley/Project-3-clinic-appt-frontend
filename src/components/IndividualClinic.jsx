import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { getClinicById } from "../actions/clinicInfo";

const IndividualClinic = ({getClinicById}) => {
    // useEffect(() => {
    //     getClinicById(match.params.id)
    // }, [getClinicById, match.params.id])

    return(
        <div className="clinic-info">
            <h1>Clinic 1</h1>
            <p>Name of doctor:</p>
            <p>Education:</p>
            <p>Specialisation:</p>
            <p><Link to="/makeappt">Book appointment</Link></p>
        </div>
    )
}

export default IndividualClinic