import React from "react"

const UserSignup = () => {
    return(
        <div className="container">
            <h1>Sign Up page</h1>
            <div className="signupform">
                <form>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter your email address" name="email" />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Full name:</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" name="name" />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputPassword1">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" />
                    </div>
                    <div className="form-group">
                    <label className="label" for="exampleInputEmail1">Confirm password:</label>
                    <input type="text" className="form-control" placeholder="Enter password again" name="name" />
                    </div>
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    )
}

export default UserSignup