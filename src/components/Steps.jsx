import React from 'react'
import "../css/steps.css"

const Steps = () => {
  return (
    <>
        <h1>How to buy a property</h1>
    <div className='steps_container'>
      <div>
        {/* <h1>Step 1</h1> */}
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Search according to your needs</p>
      </div>
      <div>
        {/* <h1>Step 2</h1> */}
        <i className="fa-solid fa-phone"></i>
        <p>Contact the seller</p>
      </div>
      <div>
        {/* <h1>Step 3</h1> */}
        <i className="fa-sharp fa-solid fa-circle-dollar-to-slot"></i>
        <p>Buy it</p>
      </div>
    </div>
    </>
  )
}

export default Steps

