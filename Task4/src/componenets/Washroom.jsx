import React from 'react'

const Washroom = (props) => {
  return (
    <div className= {`washroom ${props.user}`}>
     {props.user} Washroom
    </div>
  )
}

export default Washroom
