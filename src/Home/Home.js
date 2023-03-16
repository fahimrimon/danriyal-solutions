import React from 'react'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Blogs from '../Pages/Blogs/Blogs'
import ContactUs from '../Pages/ContactUs'
import Services from '../Pages/Services'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
