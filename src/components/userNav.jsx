import React, { useEffect } from "react"
import { Menu, Typography } from "antd"
import { Link, Outlet } from "react-router-dom"
import { ProfileOutlined, MedicineBoxOutlined, ScheduleOutlined } from "@ant-design/icons"
import store from "../store"
import { useNavigate } from "react-router-dom"

const UserNav = () => {

    let navigate = useNavigate()
    const Store = { authenticated: store.getState() }
    const isLoggedIn = Store.authenticated.authUser.isUserAuthenticated
    console.log(isLoggedIn)

    useEffect(() => {
        if (!isLoggedIn) { navigate('/login') }
    }, [isLoggedIn])

    return ( <div>

        {isLoggedIn ?
            (
                <div className="nav-container">
                    <div className="logo-container">
                        <Typography.Title level={2} className="logo">
                            Book a doctor
                        </Typography.Title>
                    </div>
                    <Menu theme="dark">
                        {/* <Menu.Item icon={<ProfileOutlined />}>
                            <Link to="/profile">Patient Data</Link>
                        </Menu.Item> */}
                        <Menu.Item icon={<MedicineBoxOutlined />}>
                            <Link to="/clinics">Clinics</Link>
                        </Menu.Item>
                        <Menu.Item icon={<ScheduleOutlined />}>
                            <Link to="/appointment">Appointments</Link>
                        </Menu.Item>
                    </Menu>
                    <Outlet />
                </div>
            ) : (<div>Please Log In</div>)
        }

    </div> )
}

export default UserNav