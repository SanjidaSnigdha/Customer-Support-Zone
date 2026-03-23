import React from 'react';

const Banner = () => {
    return (
        <div className='border-amber-400 border-2 flex justify-between w-11/12 mx-auto'>
            <img src="../../assets/vector1.png" alt="" className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[708px] h-[250px]'/>
            <img src="../../assets/vector2.png" alt="" className='bg-gradient-to-r from-[#54CF68] to-[#00827A]'/>
        </div>
    );
};

export default Banner;