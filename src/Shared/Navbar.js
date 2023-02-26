import React from 'react'
function Navbar() {
  return (
    <div class="navbar">
  <div class="navbar-start lg:ml-8">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='text-lg'>About</a></li>
        <li><a className='text-lg'>Services</a></li>
        <li><a className='text-lg'>Blogs</a></li>
        <li><a className='text-lg'>Contact Us</a></li>
      </ul>
    </div>
    <img className='h-14 w-14 mr-0' src="https://i.ibb.co/93Y23TX/Danriyal-logo.png" alt="Danriyal-logo"/>
    <h1 class="text-base font-bold">Danriyal <br/> <span className='pt-4'>Solutions</span></h1>
  </div>
  <div class="navbar-end hidden lg:flex lg:mr-8">
    <ul class="menu menu-horizontal px-1">
        <li><a className='text-xl font-semibold'>About</a></li>
        <li><a className='text-xl font-semibold'>Services</a></li>
        <li><a className='text-xl font-semibold'>Blogs</a></li>
        <li><a className='text-xl font-semibold'>Contact Us</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
