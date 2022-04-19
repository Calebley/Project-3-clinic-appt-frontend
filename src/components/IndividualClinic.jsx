import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { getClinicById } from "../actions/clinicInfo";
import store from "../store"
import { Clinics } from ".";

const IndividualClinic = ({getClinicById, clinic: {clinicById}}) => {
    const { clinicId } = useParams()

    useEffect(() => {
        getClinicById(clinicId)
    }, [getClinicById, clinicId])

    console.log(store.getState())

    return(

        <div className="clinic-info">
            <h1>{clinicById.name}</h1>
            <p>{clinicById.doctorname}</p>
            <p>{clinicById.education}</p>
            <p>{clinicById.specialisation}</p>
            <p><Link to={`/makeappt/${clinicById._id}`}>Book appointment</Link></p>
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