import React from 'react'

function AboutUs() {
  return (
    <div name='about' className='mt-36 lg:mt-36 mx-8 lg:mx-36'>
        <div className='text-center'>
        <h2 className='text-red-500 text-4xl mb-2'>About Us</h2>
        <h2 className='text-2xl font-semibold mb-4 text-gray-900'>Need to know about the Company</h2>
        <h2 className='text-base text-lg mb-16 text-gray-800'>Danriyal Solutions Technologies, Bangladesh based custom software development & consulting company focusing on web, mobile, AI, desktop & embedded software development. We always try to provide good service to the client so that they always have atrust in us.</h2>
        </div>
      <div className='lg:grid lg:grid-cols-2 gap-4'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ml-32 lg:ml-0 lg:mr-12 mr-0'>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-black font-bold mb-4'>100+</h2>
                <h2 className='text-xs text-gray-800'>Active Users</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-sky-400 font-bold mb-4'>10+</h2>
                <h2 className='text-xs text-gray-800'>Team Members</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-blue-500 font-bold mb-4'>1 Years</h2>
                <h2 className='text-xs text-gray-800'>In Business</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-yellow-400 font-bold mb-4'>10+</h2>
                <h2 className='text-xs text-gray-800'>Clients Worldwide</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-red-500 font-bold mb-4'>45+</h2>
                <h2 className='text-xs text-gray-800'>Projects Completed</h2>
            </div>
        </div>
        <div className='mt-8 lg:mt-0'>
        <h2 className='text-pink-500 text-2xl mb-3'>Our Story</h2>
        <h2 className='text-4xl font-semibold leading-normal text-gray-800'>A Great Story Starts with a <br/> Friendly Team</h2>
        <h2 className='text-base text-lg text-gray-800 subpixel-antialiased mt-4'>Our company started with some of our friends. The aim of all of them was to bring the world's best ranking with good service by showing their work skiils.</h2>
        </div>
        </div>
      </div>
  )
}

export default AboutUs
