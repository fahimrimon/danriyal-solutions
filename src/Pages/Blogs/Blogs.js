import React from 'react'
import { Link } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';

function Blogs() {
  const [data] = useBlogs();
    return (
        <div name='blogs' className='mx-12 lg:mx-32 mt-32 lg:mt-40'>
            <div className='text-center'>
            <h2 className='text-red-500 text-4xl mb-2'>Our Blogs</h2>
            <h2 className='text-2xl font-semibold mb-4'>See Worldwide Trending Blogs</h2>
            <h2 className='text-base text-lg mb-16'>Danriyal Solution team has always research the world about all the issues that happened in the world. <br/> So let's see what have to do in our new blogs.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  {
                      data.slice(0,6).map(data => 
                        <div key={data.id} class="card lg:max-w-lg bg-base-100 shadow-xl">
                                     <figure><img className='h-52 w-[100%]' src={data.img} alt="Shoes" /></figure>
                                   <div class="card-body">
                                  <h2 class="card-title">{data.name}</h2>
                               <p>{data.details}</p>
                              <div class="card-actions justify-end">
                             <button class="btn btn-success">Buy Now</button>
                           </div>
                          </div>
                       </div>
                    )
                  }
            </div>
            <Link to="/allblogs"><h2 className='flex justify-end mt-12 text-xl font-semibold text-blue-500'>See More -&#62;</h2></Link>
        </div>
    );
}

export default Blogs