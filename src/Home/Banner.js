import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div>
        <img
          className="w-screen lg:h-[90vh] h-[50%] md:h-[70%]"
          src="https://i.ibb.co/DgBHrLY/Cover.jpg"
          alt="Cover"
        />
        <h2 className="text-center font-bold text-3xl lg:my-24 my-8 text-gray-800">
          {" "}
          <span className="">Our mission is to make</span> <br />{" "}
          <span className="text-blue-500 ">world's latest technology</span>
          <br /> <span className="text-green-500">accesible</span> and{" "}
          <span className="text-green-500">beneficial</span> for all
        </h2>
      </div>

      {/* Farmer Section */}
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/yVWPTMp/Farmer.jpg"
              className="max-w-sm lg:max-w-xl lg:ml-40 rounded-md shadow-xl"
            />
            <div className="max-w-[100vw] lg:mr-40">
              <p className="py-6 text-xl font-bold leading-relaxed text-gray-800">
                Committed to significantly ease our <br /> lives with a little
                help from our <br /> products and services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology part */}
      <div>
        <div className="hero mt-8 lg:mt-40">
          <div className="hero-content flex-col lg:flex-row lg:space-x-96">
            <img
              src="https://i.ibb.co/xm3SBxM/Robotics.jpg"
              className="max-w-sm lg:max-w-xl max-h-64 rounded-md shadow-xl" alt="pic-3"
            />
            <div>
              <p className="py-6 text-xl font-bold leading-relaxed text-gray-800">
                Benefitting others through <br /> the use of technology
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                View all our services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* stories and article */}
      <div className="mt-16 lg:mt-28">
        <div className="text-center">
          <p className="text-center text-xl font-bold leading-relaxed text-gray-800">
            Offering convenience through the <br /> knowledge of information &
            technology
          </p>
          <Link to='/allblogs'>
          <button className="bg-blue-600 text-white px-6 py-1 rounded-lg mt-4">
            Explore all our stories & <br/>articles
          </button></Link>
          <div className="mt-8 flex justify-center">
            <img className="w-screen mx-20 h-44 md:h-52 lg:h-72 shadow-lg" src="https://i.ibb.co/bsNLNwZ/image-5.jpg" alt="img-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
