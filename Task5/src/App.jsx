import React, { useState } from 'react'

const App = () => {

  const [formData, setformData] =
    useState({
      name: '',
      email: '',
      number: ''
    })

  const [contact, setcontact] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value
    })
  }


  const submitHandling = (e) => {
    e.preventDefault();
    // console.log('submitted');
    console.log(formData)

    setcontact(prev => [...prev, formData])
    console.log(contact)

    setformData({
      name: '',
      email: '',
      number: ''
    })
  }

  return (
    <div className='form-container'>
      <div className="form-wrapper">
        <h2>User Details</h2>
        <form onSubmit={submitHandling}>
          <input
            type="text"
            placeholder='Enter Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder='Enter Email'
            // required
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder='Enter Number'
            name='number'
            value={formData.number}
            onChange={handleChange}

          />

          <button>Submit</button>
        </form>
      </div>
      <div className="contacts-wrapper">
        {contact.map(function (cont, idx) {
          return (
          <div className="contacts-card" key={idx}>
            <h3>Name: {cont.name} </h3>
            <p>Email: {cont.email} </p>
            <p>Number: {cont.number} </p>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
