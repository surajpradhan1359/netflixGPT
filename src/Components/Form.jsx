import React from 'react';
import { netflixBgImage } from '../utils/formUtils';
import { Siginform } from './Siginform';

export const Form = () => {
  return (
    <div className='relative'>
      <div className="relative">
        <img
          src={netflixBgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <Siginform/>
    </div>
  )
}
