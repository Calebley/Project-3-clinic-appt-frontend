import React, {useState} from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"

const ClinicItems = ({
    clinic: {
        _id,
        clinicname,
        doctorname,
        address,
        education,
        specialisation
    }
}) => {
    return(
        <div className="clinics">
            <div className="clinic-desc">
                <h2><strong>{clinicname}</strong></h2>
                <p><strong>{address}</strong></p>
                <p><strong>{doctorname}</strong></p>
            </div>
            <div className="clinic-details">
                <Link to={`/clinic/${_id}`} type="button">More details</Link>
            </div>
        </div>
    )
}

ClinicItems.propTypes = {
    clinic: PropTypes.object.isRequired
}


export default connect (ClinicItems)