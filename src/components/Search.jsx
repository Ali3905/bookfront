import React from 'react'
import "../css/search.css"

const Search = () => {
  return (
    <>
    <div>
    <div className='search_container'>

        <div className="search">
          <p>Search for properties to rent across the Pakistan</p>
            <div className='search_top'>
              <div>
                <input type="text" name='location' id='location' placeholder='location' />
              </div>
              <div className='price'>
                <input type="number" name='min_price' id='min_price' placeholder='Min Price' />
                <input type="number" name='max_price' id='max_price' placeholder='Max Price' />
              </div>
            </div>
            <div className='search_bottom'>
              <div className='bed'> 
                <input type="number" name='min_bed' id='min_bed' placeholder='Min Bed' />
                <input type="number" name='max_bed' id='max_bed' placeholder='Max Bed' />
              </div>
              <div>
                <input type="text" name='furnished' id='furnished' placeholder='Furnished' />
              </div>
            </div>
              <div>
                <button>Submit</button>
              </div>
        </div>
    </div>
    </div>
    <div className='bottom'>
    </div>
    </>
  )
}

export default Search
