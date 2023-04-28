import React from 'react'
import "../css/filters.css"

const Filters = () => {
  return (
      <div className="fliters_container">
        <div className="filters_facilities_container">
            <h2>Popular Filters</h2>
        <div className="filters_facilities">
            <div>
            <input type="checkbox" name="wifi" id="wifi" />
            <label for="wifi">Wifi</label>
            </div>

            <div>
            <input type="checkbox" name="parking" id="parking" />
            <label for="parking">Parking</label>
            </div>

            <div>
            <input type="checkbox" name="garden" id="garden" />
            <label for="garden">Garden</label>
            </div>

            <div>
            <input type="checkbox" name="swimmingPool" id="swimmingPool" />
            <label for="swimmingPool">Swimming Pool</label>
            </div>

            <div>
            <input type="checkbox" name="openFire" id="openFire" />
            <label for="openFire">Open Fire</label>
            </div>

        </div>
        </div>
        <div className="filters_price_container">
            <h2>Price Range</h2>
        <div className="filters_price">
            <input type="number" name="minPrice" id="minPrice" />
            <input type="number" name="maxPrice" id="maxPrice" />
            <button>Apply</button>        
        </div>
        </div>
        <div className="filters_bed_container">
            <h2>Number of Bedrooms</h2>
        <div className="filters_bed">
            <input type="number" name="minBed" id="minBed" />
            <input type="number" name="maxBed" id="maxBed" />
            <button>Apply</button>        
        </div>
        </div>
        <div className="filters_star_container">
            <h2>Ratings</h2>
        <div className="filters_star">
            <div>
                <input type="checkbox" name="5_star" id="5_star" />
                <label for="5_star"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></label>
            </div>
            <div>
                <input type="checkbox" name="4_star" id="4_star" />
                <label for="4_star"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></label>
            </div>
            <div>
                <input type="checkbox" name="3_star" id="3_star" />
                <label for="3_star"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></label>
            </div>
            {/* <button>Apply</button>         */}
        </div>
        </div>
      </div>
  )
}

export default Filters
