import React from 'react'
import Card from './assets/componenets/Card'
import Button from "./assets/componenets/Button";

const App = () => {
  const arr = ['ankush', 'payal', 'abhishek', 'kartik']
  return (
    <div className='h-screen bg-gray-950 p-6 text-white'>
     {/* <Card user='Ankush' age={23} />
     <Card user='payal' age={21} />
     <Button text= 'Buy Now' />
     <Button text= 'Explore Now' /> */}
     {arr.map(function(elem){
      return <Card user={elem} />
     })}
    </div>
  )
}

export default App
