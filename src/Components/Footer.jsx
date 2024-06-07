import React from 'react'
import Logo from '../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiInstagram } from "react-icons/tfi";

const footer = () => {
  return (
    <div className='w-full h-[600px] flex justify-center items-center  '>
      <div className='w-[72%] h-[550px] flex justify-center items-center'>

      <div className='w-full h-[290px] '>
        <div className='w-full h-[50px]'>
          <div className='w-[150px] h-[0px]'>
          <img src={Logo} alt="" /></div>
          </div>
        <div className='w-[80%] h-[160px] flex items-center'>
          <h1>Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC.</h1>
        </div>
        <div className='w-full h-[100px]'>
          <div className='flex w-[30%] h[50px] justify-between'> <FaFacebook/>
                <AiFillTwitterCircle/>
                <TfiInstagram />
          </div>
        </div>
      </div>

        <div className='w-full h-[300px] flex justify-evenly items-center'>                                 

            <div className='w-[25%] h-[300px] flex flex-col justify-between  '>
              <h1 className='text-xl'>Company</h1>
              <h3>About</h3>
              <h3>Career</h3>
              <h3>Mobile</h3>
            </div>
            <div className='w-[25%] h-[300px] flex flex-col justify-between   '>
            <h1 className='text-xl'>Contact</h1>
              <h3>Why Travlog?</h3>
              <h3>Partner with us</h3>
              <h3>FAQ’s</h3>
              <h3>Blog</h3>
            </div>
            <div className='w-[25%] h-[300px] flex flex-col justify-between   '>
            <h1 className='text-xl'>Meet Us</h1>
              <h3>+00 92 1234 56789</h3>
              <h3>info@travlog.com</h3>
              <h3>205. R Street, New York</h3>
              <h3>BD23200</h3>
            </div>
        </div>
    </div>
      </div>
  )
}

export default footer
