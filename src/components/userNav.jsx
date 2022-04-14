import React from "react"
import { Menu, Typography } from "antd"
import { Link } from "react-router-dom"
import { ProfileOutlined, MedicineBoxOutlined, ScheduleOutlined } from "@ant-design/icons"

const UserNav = () => {
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={2} className="logo">
                    Book a doctor
                </Typography.Title>
            </div>
            <Menu theme="light">
                <Menu.Item icon={<ProfileOutlined />}>
                <Link to="/profile">Patient Data</Link>
                </Menu.Item>
                <Menu.Item icon={<MedicineBoxOutlined />}>
                    <Link to="/clinic">Clinics</Link>
                </Menu.Item>
                <Menu.Item icon={<ScheduleOutlined />}>
                    <Link to="/appointment">Appointments</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default UserNav