import React, { useState } from 'react'

const CharacterCounter = () => {

    const [text, settext] = useState('')
    const characterCounter = (e) => {
        settext(e.target.value)
    }

    return (
        <div className='input'>
            <input
                type="text"
                placeholder='Write Here...'
                onChange={characterCounter}
            />
    <h2>Characters: {text.length} </h2>
        </div>
    )
}

export default CharacterCounter
