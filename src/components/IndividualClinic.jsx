import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { getClinicById } from "../actions/clinicInfo";
import store from "../store"
import { Clinics } from ".";
import { UserOutlined, ReadOutlined, SearchOutlined  } from "@ant-design/icons";
import { Col, Row, Typography, Select } from 'antd';

const { Text } = Typography
const IndividualClinic = ({getClinicById, clinic: {clinicById}}) => {
    const { clinicId } = useParams()

    useEffect(() => {
        getClinicById(clinicId)
    }, [getClinicById, clinicId])

    console.log(store.getState())

    const info = [
        {title: "Doctor", value: `${clinicById.doctorname}`, icon: <UserOutlined />},
        {title: "Education", value: `${clinicById.education}`, icon: <ReadOutlined />},
        {title: "Specialisation", value: `${clinicById.specialisation}`, icon: <SearchOutlined />}
    ]

    return(

        <div className="clinic-info">
            <h1>{clinicById.name}</h1>
            {info.map(({icon, title, value}) => 
            <Col className="clinic-info">
                <Text>{icon} </Text>
                <Text><strong>{title}: </strong></Text>
                <Text>{value}</Text>
            </Col>
            )}
            {/* <p icon={<UserOutlined />}><strong>Doctor:</strong> {clinicById.doctorname}</p>
            <p><strong>Education:</strong> {clinicById.education}</p>
            <p><strong>Specialisation:</strong> {clinicById.specialisation}</p> */}
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