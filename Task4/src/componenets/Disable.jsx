import React, { useState } from 'react'

const Disable = () => {
    const [likes, setlikes] = useState(0)
    const [isDisable, setisDisable] = useState(false)

    const disableClick = () => {
        setlikes(prev => prev + 1)
        setisDisable(true)
    }

    return (
        <div className='likes'>
            <h2> {likes} </h2>
            <button onClick={disableClick} disabled={isDisable}>Click</button>
        </div>
    )
}

export default Disable
