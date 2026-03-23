import React from 'react';
import vectorImg1 from '../../assets/vector1.png'
import vectorImg2 from '../../assets/vector2.png'

const Banner = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto mt-20'>
            <img src={vectorImg1} alt="" className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[600px] h-[150px]'/>
            <img src={vectorImg2} alt="" className='bg-gradient-to-r from-[#54CF68] to-[#00827A] w-[600px] h-[150px]'/>
        </div>
    );
};

export default Banner;