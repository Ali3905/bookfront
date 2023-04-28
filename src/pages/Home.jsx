import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Steps from '../components/Steps'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Search/>
      <Steps/>
    <div className='card_container'> 
      <h2>Popular</h2>
      <div>
          <Card/><Card/><Card/><Card/>
      </div>
    </div>
          <Footer/>
    </div>
    </>
  )
}

export default Home
