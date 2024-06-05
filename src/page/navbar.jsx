import React from 'react'
import './navbar.css'
import Logo from '../assets/logo.png'
const navbar = () => {
  return (
    <>
    <div className='nav'>
        <div className='logo'><img src={Logo} alt="" /></div>
        <div className='nav-center'>
            <h1 className='text-xl'>Home</h1>
            <h1>Discover</h1>
            <h1>Special Deals</h1>
            <h1>Contact</h1>
        </div>
        <div className='ls'>
            <h1 className='log'>Log In</h1>
            <button className='sign'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default navbar