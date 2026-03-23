import React from 'react';
import vectorImg1 from '../../assets/vector1.png'
import vectorImg2 from '../../assets/vector2.png'

const Banner = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto mt-20 gap-5'>
            <div className='relative'>
             <img src={vectorImg1} alt="" className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[700px] h-[250px] rounded-[8px]'/>
             <p className='absolute text-center inset-20 text-[#FFFFFF]'>In-Progress<br /><span className='font-bold text-[#FFFFFF] text-[40px]'>
                0</span></p>

            </div>
            <div className='relative'>
      <img src={vectorImg2} alt="" className='bg-gradient-to-r from-[#54CF68] to-[#00827A] w-[700px] h-[250px] rounded-[8px]'/>
        <p className='absolute text-center inset-20 text-[#FFFFFF]'>Resolved<br /><span className='font-bold text-[#FFFFFF] text-[40px]'>
                0</span></p>

            </div>
        </div>
    );
};

export default Banner;