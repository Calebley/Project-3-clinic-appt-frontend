import React, { useEffect } from "react"

const Clinics = ({getClinics, clinic: { clinics, loading}}) => {
    useEffect(() => {
        getClinics()
    }, [getClinics])

    return(
        <div></div>
    )


}

export default Clinics