import React from 'react'

function Banner() {
  return (
    <div>
      {/* Banner Section */}
      <div>
      <img className='w-screen h-[90vh]' src="https://i.ibb.co/DgBHrLY/Cover.jpg" alt="Cover"/>
      <h2 className='text-center font-bold text-2xl lg:my-24 my-8'> <span>Our mission is to make</span> <br/> <span className='text-blue-500 '>world's latest technology</span><br/> <span className='text-green-500'>accesible</span> and <span className='text-green-500'>beneficial</span> for all</h2>
      </div>
       
       {/* Farmer Section */}
      <div>
      <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/yVWPTMp/Farmer.jpg" className="max-w-sm lg:max-w-xl lg:ml-40 rounded-md shadow-xl" />
    <div className='max-w-[100vw] lg:mr-40'>
      <div className="py-6 text-xl font-bold text-black leading-relaxed">Committed to significantly ease our <br/> lives with a little help from our <br/> products and services</div>
    </div>
  </div>
     </div>
      </div>

      {/* Technology part */}
      <div>
      <div className="hero mt-8 lg:mt-40">
     <div className="hero-content flex-col lg:flex-row lg:space-x-80">
    <img src="https://i.ibb.co/xm3SBxM/Robotics.jpg" className="max-w-sm lg:max-w-xl max-h-72 rounded-md shadow-xl" />
    <div>
      <p className="py-6 text-xl font-bold text-black leading-relaxed">Benefitting others through <br/> the use of technology</p>
    </div>
   </div>
   </div>
      </div>
    </div>
  )
}

export default Banner
