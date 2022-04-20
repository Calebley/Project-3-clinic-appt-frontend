import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { getClinics } from "../actions/clinicInfo"
import ClinicItems from "./ClinicItems"
import {connect} from "react-redux"
import store from "../store"


const Clinics = ({getClinics, clinic: {clinics}}) => {
    

    useEffect(() => {
        getClinics()
    }, [getClinics])

console.log(store.getState())
    return(
        
        <div className="clinic-container">
            <div className="clinic-heading">
                <h1>Clinic Information</h1>
            </div>
            <br />
            <div className="clinic-desc-container">
                <Row gutter={[32]} className="clinic-card-container">
            {
                clinics != null ? (
                    clinics.map(clinic => (
                        <Col span={8} className="clinic-card" key={clinic._id}>
                            <Link to={`/clinic/${clinic._id}`}>
                            <Card hoverable >
                                <p>{clinic.name}</p>
                                <p>{clinic.address}</p>
                                <p>{clinic.doctorname}</p>
                            </Card>
                            </Link>
                        </Col>
                        
                    ))
                ) : <h4>No profiles found</h4>
            }
            </Row>
            </div>
        </div>
    )
}

Clinics.propTypes = {
    getClinics: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    clinic: state.clinic
})

export default connect(mapStateToProps, {getClinics}) (Clinics)