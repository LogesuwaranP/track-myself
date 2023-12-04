import React from 'react'
import './Navbar.css'
import home from '../../assets/images/home-black-icon.jpeg'
const Navbar = () => {

  return (
    <div className='nav-container'>
      <img src={home} alt="home icon" />
    </div>
  )
}

export default Navbar
