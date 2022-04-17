import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { register } from "../actions/authUser"
import PropTypes from "prop-types"


const UserSignup = ({ register, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })

    const { username, email, password, password2 } = formData
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault()
        if(password !== password2) {
            alert("Password does not match")
        } else {
            register({username, email, password })
        }
    }
    if (isUserAuthenticated) {
        return <Navigate to="/" />
    }

    return(
        <div className="signup-container">
            <h1>Sign Up page</h1>
            <div className="signupform">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="signupinfo">
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail">Username:</label>
                    <input type="username" className="form-control" placeholder="Enter your username" name="username" value={username} onChange={e => onChange(e)}/>
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputPassword1">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Confirm password:</label>
                    <input type="password" className="form-control" placeholder="Enter password again" name="password2" value={password2} onChange={e => onChange(e)} />
                    </div>
                    <input type="submit" value="Sign up" />
                    </div>
                </form>
            </div>
        </div>
    )
}

UserSignup.propTypes = {
    register: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
})

export default connect(mapStateToProps, { register }) (UserSignup)