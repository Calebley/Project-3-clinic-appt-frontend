import React from "react"
import { connect } from "react-redux"
import { Route, Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const PrivateUser = ( { children }) => {
    const [token, setToken] = localStorage.token
    return token ? children : <Navigate to="/login" />
}

export default PrivateUser