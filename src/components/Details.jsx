import React from 'react'
import '../css/details.css'

const Details = () => {
  return (
    <div className='details_container'>


      <div className='details_img'>

        <div className='big_img'>
        <img src="img/bg.png" alt="house" />
        </div>
        <div className='sm_img'>
        <img src="img/bg.png" alt="house" />
        <img src="img/bg.png" alt="house" />
        <img src="img/bg.png" alt="house" />
        </div>
    
      </div>


      <div className='details_info'>

        <div className='details_description'>
            <p>Studio</p>
            <h2>Mujahid Colony, Kharian</h2>
            <p>
            <strong>Nice family holiday home on a popular holiday park and is ideally located to use as a base to explore this part of Cornwall.
Ground Floor:</strong><br />
1.Open plan living space.<br />
2.Living area: With TV and sofa.<br />
3.Dining area.<br />
4.Kitchen area: With breakfast area, electric oven, electric hob, combi microwave/oven/grill and fridge.<br />
<strong>Bedroom 1:</strong> With double bed.<br />
<strong>First Floor:</strong><br />
<strong>Bedroom 2:</strong> With double bed. <br />
<strong>Shower room:</strong> With shower cubicle and toilet. <br />
• Electric central heating<br />
•  electricity<br />
•  bed linen and towels included<br /><br />
 <strong> Welcome package.</strong><br />
•    Shared on-site facilities<br />
•    Lawned gardens<br />
•    Swimming pool (25m x 16m, depth 0.5m – 1.5m, open all year)<br />
•    Tennis court<br />
•    Public car park<br />
•    free of charge<br />
•    No smoking<br /><br />
    <strong>Please note: The swimming pool can be booked after registration with Atlantic reach reception on arrival.</strong><br /><br />
117 Atlantic Reach is a mid terrace house with communal lawned areas to the front. The open plan ground floor has a good sized living area leading to a well equipped kitchen, and dining area. 117 Atlantic Reach itself offers plenty of fun activities including play areas, a public swimming pool, tennis courts and family restaurant. There are a number of car parks on the site and the nearest one is only a short walk from the house.
The seaside town of Newquay is within 5 miles and has a number of sandy beaches, a golf course, a wide range of high street and local shops as well as supermarkets and a number of pubs and restaurants. Only a short drive away is the main A30 that gives easy access to the rest of what Cornwall offers. Beach 5 miles.

            </p>
        </div>


        <div className='details_card'> 
        <p>29 Apr • 7 Nights</p>
        <h2>15k pkr</h2>
        <button>Book Now</button>
         </div>
      </div>
    </div>
  )
}

export default Details
