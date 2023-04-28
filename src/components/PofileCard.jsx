import React from 'react'
import "../css/profileCard.css"

const PofileCard = () => {
  return (
    <div className='profile_container'>
        <div className="profile_info">
          <div>
            <img src='img/avatar.jpg' alt='avatar'></img>
          </div>
          <div>
          <span>Muhammad Ali</span>
          <span>muhammadali@gmail.com</span>
          <span><a href="/">Edit your profile</a></span>
          </div>
        </div>
        <ul className="profile_list">
            <li><i className="fa-solid fa-list"></i>My listings</li>
            <li><i className="fa-brands fa-rocketchat"></i>Chats</li>
            <li><i className="fa-solid fa-right-from-bracket"></i>Logout</li>
        </ul>
    </div>
  )
}

export default PofileCard
