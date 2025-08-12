import React from 'react'

export const Content = ({title, overview}) => {
  return (
    <div className='absolute top-1/4 left-0 right-0  z-20 max-w-[1400px] mx-auto p-2 sm:p-0'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-white'>{title}</h1>
      <p className='sm:text-lg mb-5 text-white sm:w-2/4'>{overview}</p>
      <div>
        <button className='bg-white text-black py-2 px-4 rounded cursor-pointer'>Play</button>
        <button className='bg-white text-black py-2 px-4 rounded ml-4 cursor-pointer'>More Info</button>
      </div>
    </div>
  )
}
