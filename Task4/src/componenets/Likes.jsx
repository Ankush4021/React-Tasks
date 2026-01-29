import React, { useState } from 'react'

const Likes = () => {

    const [like, setlike] = useState(0)
    const addLikes = () => {
        console.log('hoo');

        setlike(prev => prev + 1)
    }

    return (
        <div className='likes'>
            <h2> You liked this {like} times </h2>
            <button onClick={addLikes}>Like</button>
        </div>
    )
}

export default Likes
