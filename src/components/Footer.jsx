import React from 'react'
import "../css/footer.css"

const Footer = () => {
  return (
    <div className='footer_container'>
    <div className='footer'>
        <div>
            <h3>Navigate</h3>
            <p><a href="/">Home</a></p>
            <p><a href="/">About</a></p>
            <p><a href="/">Shop</a></p>
        </div>
        <div>
            <h3>Our Socials</h3>
            <p><i className="fa fa-youtube-play"></i><a href="/">Youtube</a></p>
            <p><i className="fa fa-twitter"></i><a href="/">Twitter</a></p>
            <p><i className="fa fa-instagram"></i><a href="/">Instagram</a></p>
        </div>
        <div>
            <h3>Signup to our NewsLetter</h3>
            <input type="text" />
            <button>Signup</button>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
