import React, { useState } from 'react'

const Input = () => {

    const [chnage, setchnage] = useState('')
    const inputChange = (e) => {
        // console.log('change')
        // console.log(e.target.value);
        setchnage(e.target.value)
        
    }
    return (
        <div className='input'>
            <input onChange={(e)=>{
                inputChange(e)
            }} type="text" placeholder='enter name' />
            <h3>{chnage}</h3>
        </div>

    )
}

export default Input
