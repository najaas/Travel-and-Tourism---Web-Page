import React from 'react'
import Star from '../assets/star.png'
import Card1 from '../assets/Rectangle 1.png'

const Card = () => {
  return (
    <div className=" w-[260px] max-w-sm mx-auto overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-[#5F8F15]">
    <div className="relative">
      <img
        className="w-full h-48 object-cover rounded-t-3xl"
        src={Card1}
        alt="Profile Image"
      />
    </div>
    <div className="px-6 py-4 flex justify-between">
      <div className="text-xl font-semibold text-gray-800">hry</div>
      <p className="text-gray-600">₹ 15</p>
    </div>
    <div className="px-6 py-3">
      <span className="inline-block py-1 font-semibold text-teal-90">Rome,italy</span>

    </div>
    <div className="px-6 py-4">
      <a href="#" className="text-[#5F8F15] hover:underline flex ">
    4.5<img src= {Star} alt="" />
      </a>
    </div>
  </div>
  )
}

export default Card
