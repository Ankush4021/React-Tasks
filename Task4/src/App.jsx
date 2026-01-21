import React, { useState } from 'react'
import Washroom from './componenets/Washroom'


const App = () => {

  const [gender, setgender] = useState("Male")

  function changeGender() {
    if(gender == "Male"){
      setgender("Female")
    }else if(gender == "Female"){
      setgender("Others")
    }else{
      setgender("Male")
    }
  }

  return (
    <div className='main'>
     <div className={`gender ${gender}`}>
       <h1>My Gender is ~ {gender} </h1>
     </div>
      <button onClick={changeGender}>Change Gender</button>
      <Washroom user = {gender} />
    </div>
  )
}

export default App
