import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div className='text-3xl text-white bg-cyan-400 w-fit p-5 rounded-2xl font-semibold mb-2'>
        {props.text}
      </div>
    </div>
  )
}

export default Button
