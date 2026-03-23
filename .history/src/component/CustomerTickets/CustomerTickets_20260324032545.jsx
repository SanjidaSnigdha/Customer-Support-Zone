import React, { use } from 'react';
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div className='w-11/12 mx-auto'>
        <h1 className='font-semibold text-[#34485A] text-[14px] mt-15'>Customer Tickets</h1>
         
       <div className="card w-96 bg-base-100 card-xs shadow-sm mt-3">
  <div className="card-body">
    <h2 className="card-title">Login Issues - Can't Access Account</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CustomerTickets;