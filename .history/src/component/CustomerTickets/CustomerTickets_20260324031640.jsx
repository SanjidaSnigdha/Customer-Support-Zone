import React, { use } from 'react';
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div className='w-11/12 mx-auto'>
        <h1 className='font-semibold text-[#34485A] text-[24px]'>Customer Tickets</h1>
        </div>
    );
};

export default CustomerTickets;