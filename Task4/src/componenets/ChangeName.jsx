import React, { useState } from 'react'

const ChangeName = () => {

    const [profile, setprofile] = useState("Ankush")

    const changeProfile = () => {
        setprofile(profile === "Ankush" ? "Frontend Developer" : "Ankush")
    }

    return (
        <div>
            <h2> {profile} </h2>
            <button onClick={changeProfile}>Click</button>
        </div>
    )
}

export default ChangeName
