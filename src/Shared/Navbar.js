import React, { useState } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
function Navbar() {

  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className="navbar">
  <div className="navbar-start lg:ml-8">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='about' smooth={true} duration={500}><a className='text-lg font-semibold'>About</a></Link></li>
        <li><Link to='services' smooth={true} duration={500}><a className='text-lg font-semibold'>Services</a></Link></li>
        <li><Link to='footer' smooth={true} duration={500}><a className='text-lg font-semibold'>Blogs</a></Link></li>
        <li><Link to='contactus' smooth={true} duration={500}><a className='text-lg font-semibold'>Contact Us</a></Link></li>
      </ul>
    </div>
    <img className='h-14 w-14 mr-0' src="https://i.ibb.co/93Y23TX/Danriyal-logo.png" alt="Danriyal-logo"/>
    <h1 className="text-base font-bold">Danriyal <br/> <span className='pt-4'>Solutions</span></h1>
  </div>
  <div className="navbar-end hidden lg:flex lg:mr-8">
    <ul className="menu menu-horizontal px-1">
        <li><Link to='about' smooth={true} duration={500}><a className='text-xl font-semibold'>About</a></Link></li>
        <li><Link to='services' smooth={true} duration={500}><a className='text-xl font-semibold'>Services</a></Link></li>
        <li><Link to='footer' smooth={true} duration={500}><a className='text-xl font-semibold'>Blogs</a></Link></li>
        <li><Link to='contactus' smooth={true} duration={500}><a className='text-xl font-semibold'>Contact Us</a></Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
