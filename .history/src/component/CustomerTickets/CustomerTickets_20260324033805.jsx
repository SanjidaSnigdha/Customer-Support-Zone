import React, { use } from 'react';
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div className='w-11/12 mx-auto'>
        <h1 className='font-semibold text-[#34485A] text-[14px] mt-15'>Customer Tickets</h1>
         
       <div className="card w-96 bg-base-100 card-xs shadow-sm mt-3 rounded-none">
  <div className="card-body">
    <div className='flex justify-between'>
     <h2 className="card-title text-[#001931] font-medium text-[12px]">Login Issues - Can't Access Account</h2>
     <button className='rounded-4xl bg-[#B9F8CF] w-[60px] h-[25px]'><span className='bg-[#02A53B] px-4 py-4 rounded'>.</span>Open</button>

    </div>
    <p className='text-[#627382] text-[10px] font-medium'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CustomerTickets;