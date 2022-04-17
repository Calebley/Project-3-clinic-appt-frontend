import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { login } from "../actions/authUser"


const Loginpage = ({ login, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData
    
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault()
        login(email, password)
    }
    if(isUserAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        <div className="Loginpage">
            <h1>Book My Doctor</h1>
            <div className="login">
            <form onSubmit={e => onSubmit(e)}>
                email: 
                <input
                type="emal"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                />
                password:
                <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                />
                <input type="submit" value="Log In" />
            </form>
            </div>
            <div className="signup">
                <p><Link to="/signup">Create a new account</Link></p>
            </div>
            <img></img>
        </div>
    )
}

Loginpage.propTypes = {
    login: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
})

export default connect(mapStateToProps, { login })(Loginpage)