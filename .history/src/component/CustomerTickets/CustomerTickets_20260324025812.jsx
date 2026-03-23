import React, { use } from 'react';
const CustomerTickets = ({customerPromise}) => {
    const customerTicket = use(customerPromise)
    console.log(customerTicket)
    return (
        <div>
            hi
        </div>
    );
};

export default CustomerTickets;