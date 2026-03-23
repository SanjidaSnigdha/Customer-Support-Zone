import React, { use } from 'react';

const CustomerTickets = ({fetchTickets}) => {
    const customerTicket = use(fetchTickets)
    console.log(customerTicket)
    return (
        <div>
            hi
        </div>
    );
};

export default CustomerTickets;