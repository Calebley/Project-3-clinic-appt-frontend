import React from "react"
import { Link } from "react-router-dom"


const ProfilePage = () => {
    return(
        <div className="profile-container">
            <Link to="/createprofile"><button>Create profile</button></Link>
            <Link to="/editprofile"><button>Edit profile</button></Link>
        </div>
    )
}

export default ProfilePage