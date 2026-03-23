import React, { use } from 'react';
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div className='w-11/12 mx-auto'>
            hi
        </div>
    );
};

export default CustomerTickets;