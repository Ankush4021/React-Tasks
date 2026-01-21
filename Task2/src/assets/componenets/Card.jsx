import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
      <div className='h-36 w-64 bg-green-600 p-4 rounded-2xl flex items-center justify-center mb-4 border-4 border-red-500'>
      <h1 className='text-4xl font-semibold'>
        {props.user}
      </h1>
      </div>
    </div>
  )
}

export default Card
