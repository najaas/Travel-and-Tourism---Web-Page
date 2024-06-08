import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Button = ({ arrows, color = 'black' }) => {
  return (
    <button
      className={`p-2 rounded-full border text-${color} flex items-center justify-center ${arrows === 'Right' ? 'bg-[#5D50C6]' : ''}`}
      style={{ width: '60px', height: '60px' }}
    >
      {arrows === 'Left' ? <FaArrowLeftLong /> : <FaArrowRightLong style={{ color: arrows === 'Right' ? 'white' : '' }} />}
    </button>
  );
};

export default Button;
