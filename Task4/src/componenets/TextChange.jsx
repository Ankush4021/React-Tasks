import React, { useState } from 'react'

const TextChange = () => {

  const [change, setchange] = useState(true)

  const changeState =()=>{    
    setchange(!change)
  }

  return (
    <div>
      {change && <h2>My name is Ankush </h2> }
      <button onClick={changeState}>Click</button>
    </div>
  )
}

export default TextChange
