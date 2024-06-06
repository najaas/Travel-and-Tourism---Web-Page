import React from 'react'
import Image from '../assets/Group 9238.png' 
import Fram from '../assets/Frame 96.png'
import Fram1 from '../assets/Frame 50.png'

const Section2 = () => {
  return (
    <div>
        <div className='w-full h-[90vh] flex items-center'>
            <div className='w-[60%] h-[70vh]'>
            <img src={Image} alt="" />
            </div>
            <div className='w-[40%] h-[70vh]'>
                <div className='w-full h[60%] flex flex-col justify-evenly'>

                <h1 className='text-3xl text-[#F85E9F]'>Travel Point</h1>
                <div className='text-4xl'>
                <h1>We helping you find</h1>
                <h1>your dream location</h1>
            </div>
            <div className='text-[#191825]'>
                <h1>Contrary to popular belief, Lorem Ipsum is not</h1>
                <h1>simply random text. It has roots in a piece of</h1>
                <h1>classical Latin literature from 45 BC.</h1>
            </div>
                </div>
                {/* <div className=' w-full flex justify-end'>
                    <img src={Fram1} alt="" />
                </div> */}
            <div>
                <div className='w-[360px]'>
                    <img src={Fram} alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2