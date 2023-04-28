import React from 'react'
import '../css/propertiescard.css'

const PropertyCards = (props) => {
  return (
    <div className='properties_search_container'>
      <div className="num_results">
        <h2>{props.results}</h2>
      </div>
      <div className="search_cards_container">
        <div className="search_card">
            <img src="img/bg.png" alt="" />
            <div className='div_2'>
              <div>
              <p>Kharian, Gujrat</p>
              <h2>Mujahid Colony, Kharian</h2>
              <div>
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              </div>
              <div className='div_p'>
                <i className="fa-sharp fa-solid fa-bed"></i><p>2</p>
                <i className="fa-solid fa-bath"></i><p>2</p>
              </div>
            </div>
            <div className='div_3'><span></span>
              <p>11 Apr - 7 Nights</p>
              <h2>15k pkr/month</h2>
              <button><p>View</p><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCards
