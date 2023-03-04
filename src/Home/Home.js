import React from 'react'
import AboutUs from '../Pages/AboutUs/AboutUs'
import ContactUs from '../Pages/ContactUs'
import Services from '../Pages/Services'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
