import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import BookAppt from "./BookAppt"
import { getClinicById } from "../actions/clinicInfo"


const BookApptForm = ({
    getClinicById,
    clinic: {clinicById},
    match,
    history
}) => {
    useEffect(() => {
        getClinicById(match.params.id)
    }, [getClinicById, match.params.id])

    return(
        <div className="form-container">
            <div className="form-side">
                {
                    clinicById !== null ?
                    (
                        <BookAppt individualclinic={clinicById.clinic} history={history} clinicId={clinicById.clinic._id} />
                    ) : (
                        ""
                    )
                }
            </div>
        </div>
    )
}

BookApptForm.propTypes = {
    getClinicById: PropTypes.func.isRequired
}

export default BookApptForm