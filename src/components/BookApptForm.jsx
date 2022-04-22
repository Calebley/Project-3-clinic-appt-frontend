import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import BookAppt from "./BookAppt"
import { useParams } from "react-router"
import store from "../store"
import { getClinicById } from "../actions/clinicInfo"


const BookApptForm = ({ getClinicById, clinic: {clinicById} }) => {
    const { clinicId } = useParams
    
    useEffect(() => {
        getClinicById(clinicId)
    }, [getClinicById, clinicId])

    console.log(store.getState())

    return(
        <div className="form-container">
            <div className="form-side">
                {
                    clinicById !== null ?
                    (
                        <BookAppt individualclinic={clinicById} clinicId={clinicById._id} />
                    ) : (
                        ""
                    )
                }
            </div>
        </div>
    )
}

BookApptForm.propTypes = {
    getClinicById: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    clinic: state.clinic
})

export default connect(mapStateToProps, {getClinicById})(BookApptForm)