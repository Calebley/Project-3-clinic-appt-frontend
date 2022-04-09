import React from "react"

const Loginpage = () => {

    return (
        <div className="Loginpage">
            <h1>Book My Doctor</h1>
            <div className="login">
            <form>
                username: 
                <input
                type="text"
                name="username"
                />
                password:
                <input
                type="text"
                name="password"
                />
                <button>Submit</button>
            </form>
            </div>
            <div className="signup">
                <p>New to this? Sign up <a href="/signup">here!</a></p>
            </div>
            <img></img>
        </div>
    )
}

export default Loginpage