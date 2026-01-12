import React from 'react'

const Nav = () => {
  return (
    <div >
      <div className="navbar">
        <h1>Horizon Courts</h1>
        <ul className="lists">
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Coaches</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contacts</a></li>
        </ul>
        <buttton className="book-now">Book Now</buttton>
      </div>
    </div>
  )
}

export default Nav
