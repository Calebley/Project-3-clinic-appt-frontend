import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import { UserOutlined, ReadOutlined, SearchOutlined, ShopOutlined  } from "@ant-design/icons";
import { Col, Row, Typography, Select } from 'antd';
import urlcat from "urlcat";
import { BookAppt } from ".";

const { Text } = Typography
const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3002"

const IndividualClinic = ({authUser: {id}}) => {
    const[oneClinic, setOneClinic] = useState([])
    const { clinicId } = useParams()

    useEffect(() => {
        fetch(urlcat(BACKEND, `/clinic/${clinicId}`))
        .then((response) => response.json())
        .then((data) => setOneClinic(data))
    },[])
    

    const info = [
        {title: "Doctor", value: `${oneClinic.doctorname}`, icon: <UserOutlined />},
        {title: "Education", value: `${oneClinic.education}`, icon: <ReadOutlined />},
        {title: "Specialisation", value: `${oneClinic.specialisation}`, icon: <SearchOutlined />},
        {title: "Address", value: `${oneClinic.address}`, icon: <ShopOutlined />}
    ]

    return(

        <div className="clinic-info">
            <h1>{oneClinic.name}</h1>
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
            <p><Link to={`/appt/${oneClinic._id}/${id}`}>Book appointment</Link></p>
        </div>

    )
}

IndividualClinic.propTypes = {
    authUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authUser: state.authUser
})

export default connect(mapStateToProps) (IndividualClinic)