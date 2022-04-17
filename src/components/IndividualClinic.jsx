import React, { useEffect } from "react";
import { getClinicById } from "../actions/clinicInfo";

const IndividualClinic = ({getClinicById}) => {
    // useEffect(() => {
    //     getClinicById(match.params.id)
    // }, [getClinicById, match.params.id])

    return(
        <div className="clinic-info">
            <h1>Clinic 1</h1>
        </div>
    )
}

export default IndividualClinic