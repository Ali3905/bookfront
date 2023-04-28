import React from 'react'
import "../css/card.css"

const Card = () => {
  return (
    
    <div className='card'>
      <img src="/img/bg.png" alt="" />
      <h1>Studio</h1>
      <h2>PKR 15,000/month</h2>
      <p>Mujahid Colony, Kharian</p>
      
      <div>
      <i className="fa-sharp fa-solid fa-bed"></i>
      <p>2</p>
      <i className="fa-solid fa-bath"></i>
      <p>2</p>
      </div>
      <div>
          <button><p>Add to Wishlist</p><i className="fa fa-heart-o"></i></button>
      <button><p>View</p><i className="fa fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Card
