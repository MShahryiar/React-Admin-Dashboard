import React from 'react'
import BannerImage from "/bannerImage.png"
import data from "../../data"
const Banner = () => {
  return (
    <div className='pt-36 p-10'>
      <div className='h-90 max-md:h-fit  w-full bg-gray-800 rounded-2xl flex flex-col  md:flex-row max-md:items-center justify-center md:justify-between'>
        <div className='flex gap-5 p-5 justify-between flex-col '>
          <div className='flex gap-5 items-center'>

          <div className='h-15 w-15 border-4 border-white bg-black rounded-full'/>
          <div className='text-gray-100'>
            <h2 className='text-lg'>Welcome back</h2>
            <h1 className='text-4xl font-bold'>John Davis</h1>
          </div>
          </div>
          <div className='flex divide-x-3 divide-white'>
            <div className=' w-fit   text-center p-10 '>
              <h1 className='font-bold text-4xl text-white'>{data.userStats.totalUsers} </h1>
              <h3 className='text-light text-white text-lg'>Total Users</h3>
            </div>
            <div className='   p-10 text-center'>
              <h1 className='font-bold text-4xl text-white'>{data.userStats.activeUsers} </h1>
              <h3 className='text-light text-white text-lg'>Active Users</h3>
            </div>
          </div>
        </div>
        <img src={BannerImage} className='max-md:w-2/3 h-2/3 md:self-end' alt='Banner Image'/>
      </div>
    </div>
  )
}

export default Banner