import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { getClinicById } from "../actions/clinicInfo";

const IndividualClinic = ({getClinicById, clinic: {clinicById}, match}) => {
    useEffect(() => {
        getClinicById(match.params.id)
    }, [getClinicById, match.params.id])

    return(
        <div className="clinic-info">
            <h1>{clinicById.clinic.clinicname}</h1>
            <p>{clinicById.clinic.doctorname}</p>
            <p>{clinicById.clinic.education}</p>
            <p>{clinicById.clinic.specialisation}</p>
            <p><Link to={`/makeappt/${clinicById.clinic._id}`}>Book appointment</Link></p>
        </div>
    )
}

IndividualClinic.propTypes = {
    getClinicById: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    clinic: state.clinic
})

export default connect(mapStateToProps, {getClinicById}) (IndividualClinic)