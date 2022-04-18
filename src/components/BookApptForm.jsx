import React, { useEffect } from "react"
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
                        <BookAppt clinic={clinicById.clinic} history={history} clinicId={clinicById.clinic._id} />
                    ) : (
                        ""
                    )
                }
            </div>
        </div>
    )
}

export default BookApptForm