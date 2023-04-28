import React, { useState } from 'react'
import "../css/navbar.css"
import PofileCard from './PofileCard'
// import Logo from "img/logo.png"

const Navbar = () => {
  const [showProfileCard, setShowProfileCard] = useState(false)
  return (
    <div className="nav">
      <div className="logo">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <ul className='links'>
        <li>Home</li>
        <li>About</li>
        <li>Buy</li>
        <li>Rent</li>
      </ul>
      <div className="account" onClick={()=>setShowProfileCard((prev)=>!prev)}><i className="fa-regular fa-circle-user" ></i>
      {showProfileCard && <PofileCard/>}
      </div>
    </div>
  )
}

export default Navbar
