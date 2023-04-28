import React from 'react'
import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import PropertyCards from '../components/PropertyCards'
import Footer from '../components/Footer'

const Properties = () => {
  return (
    <>
      <Navbar/>
      <div className='properties_container'>
        <Filters/>
        <div>
        <PropertyCards results={"1,236 results"}/>
        <PropertyCards/>
        <PropertyCards/>
        <PropertyCards/>
        <PropertyCards/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Properties
