import React, { useState } from 'react'
import Input from './componenets/Input'
import TextChange from './componenets/TextChange'
import ChangeName from './componenets/ChangeName'
import Likes from './componenets/Likes'
import Disable from './componenets/Disable'
import CharacterCounter from './componenets/CharacterCounter'

const App = () => {

  const [count, setcount] = useState(0)
  const addCount = () => {
    // console.log('hello')
    setcount(count + 1)
  }
  const minusCount = () => {
    if (count <= 0) {
      return
    }
    else {
      setcount(count - 1)
    }
  }

  const jumpByFive = () => {
    setcount(count + 5)
  }

  return (
    <div className='app-main'>
      <h1>Number: {count} </h1>
      <button onClick={addCount}>Count +</button>
      <button onClick={minusCount}>Count -</button>
      <button onClick={jumpByFive}>jump +5</button>

      <Input />
      <TextChange />
      <ChangeName />
      {/* <Likes />
      <Disable /> */}
      <CharacterCounter />

    </div>

  )
}

export default App
