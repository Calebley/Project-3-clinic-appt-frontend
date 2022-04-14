import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { register } from "../actions/registerUser"

const UserSignup = ({ isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, username, password, password2 } = formData
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault()
        if(password === password2) {
            alert("Password does not match")
        } else {
            register({name, username, password })
        }
    }
    if (isUserAuthenticated) {
        return <Navigate to="/" />
    }

    return(
        <div className="container">
            <h1>Sign Up page</h1>
            <div className="signupform">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail">Username:</label>
                    <input type="email" className="form-control" placeholder="Enter your username" name="email" value={username} onChange={e => onChange(e)}/>
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Full name:</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" name="name" value={name} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputPassword1">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Confirm password:</label>
                    <input type="text" className="form-control" placeholder="Enter password again" name="password2" value={password2} onChange={e => onChange(e)} />
                    </div>
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    )
}

export default UserSignup