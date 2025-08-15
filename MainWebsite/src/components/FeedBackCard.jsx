// FeedBackCard.tsx
import React from 'react';
import avatar from '../assets/avatar.png';
import quotationMark from '../assets/quotationMark.png';
import { FaQuoteRight } from 'react-icons/fa';

const FeedBackCard = ({ name, age, location, role, message,gender }) => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2 rounded-lg'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-4 items-start'>
          <img src={gender == "Male" ? "/character2.jpg" : "character3.jpg"} alt="feedback" className='w-12 h-12 rounded-full' />
          <div>
            <h1 className='font-bold text-lg'>{name}</h1>
            <p className='text-sm text-gray-500'>
              {age ? `${age} — ` : ''}
              {location} <br />
              <span className="italic">{role}</span>
            </p>
          </div>
        </div>
        <FaQuoteRight size={30}  style={{color:"#F57D1F"}} />
      </div>
      <div className='py-6'>
        <h3 className='text-md text-gray-800 leading-relaxed'>
          “{message}”
        </h3>
      </div>
    </div>
  );
};

export default FeedBackCard;
