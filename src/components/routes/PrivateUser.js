import React from "react"
import { connect } from "react-redux"
import { Route, Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const PrivateUser = ( { children, authUser: {isUserAuthenticated}, ...rest }) => {
<Route
    {...rest}
    render = {props =>
    !isUserAuthenticated ? (
        <Navigate to="/login" />
    ) : (
        <children {...props} />
    )
    }
    />
}

PrivateUser.propTypes = {
    authUser: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    authUser: state.authUser
});

export default connect(mapStateToProps)(PrivateUser);