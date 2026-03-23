import React, { use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div className='w-11/12 mx-auto'>
        <h1 className='font-semibold text-[#34485A] text-[18px] mt-15'>Customer Tickets</h1>
         
       <div className="card w-96 bg-base-100 card-xs shadow-sm mt-3 rounded-none">
  <div className="card-body">
    <div className='flex justify-between'>
     <h2 className="card-title text-[#001931] font-medium text-[15px]">Login Issues - Can't Access Account</h2>
     <button className='rounded-4xl bg-[#B9F8CF] w-[70px] h-[30px] flex items-center gap-1 p-2 font-medium text-[15px]'><span className='bg-[#02A53B] rounded-full w-3 h-3'></span>Open</button>

    </div>
    <p className='text-[#627382] text-[12px] font-medium'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex justify-between card-actions">
        <div className='flex gap-1'>
        <p>#1001</p>
        <p>HIGH PRIORITY</p>
        </div>
        <div className='flex gap-1'>
            <p>Jhon Smith</p>
            <p><FontAwesomeIcon icon ={faCalendarDays} className='' />1/2/23</p>

        </div>
        
    </div>
  </div>
</div>
        </div>
    );
};

export default CustomerTickets;