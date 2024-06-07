import React from 'react'
import Star from '../assets/star.png'

const Card = (props) => {
  return (
    <div className=" w-[300px] overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-black">
    <div className="relative">
      <img
        className="w-full h-78 object-cover rounded-t-3xl"
        src={props.image}
        alt="Profile Image"
      />
    </div>
    <div className="px-6  flex justify-between">
      <div className="text-xl font-semibold text-gray-800">hry</div>
      <p className="text-[#F85E9F]">₹ 15</p>
    </div>
    <div className="px-6">
      <span className="inline-block py-1 font-semibold  text-teal-90">Rome, italy</span>

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
