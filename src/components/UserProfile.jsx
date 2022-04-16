import React, {useState} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createProfile} from "../actions/profile"

const UserProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        name: "",
        DOB: "",
        gender: "",
        contact: "",
        email: ""
    })

    const {
        name, DOB, gender, contact, email
    } = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmit = e => {
        e.preventDefault()
        createProfile(formData, history)
    }

    return(
        <div className="container">
            <h1>Add Personal Information</h1>
            <form onSubmit={e => onSubmit(e)}>
                <small>* = required field </small>
                <div className="form-group">
                    Full name:<input type="text" placeholder="*Enter your full name" name="name" value={name} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    Date of birth:<input type="date" name="DOB" value={DOB} required pattern="\d{4}-\d{2}-\d{2}" onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    Gender:<input type="text" placeholder="*M or F" name="gender" value={gender} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    Contact:<input type="text" placeholder="*Enter your contact number" name="contact" value={contact} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    Email:<input type="email" placeholder="*Enter your email" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}

UserProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, {createProfile} ) (UserProfile)