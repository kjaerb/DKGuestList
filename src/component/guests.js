import React, { useEffect, useState } from 'react';
import GuestCard from './guestCard';

const Guests = (props) => {
    return (
        <div className="guests">
            <h1>{props.guestList.length} Gæster</h1>
            <div className="participating-guests">
            {props.guestList.map((data, id) => {
                return(
                    <GuestCard key={id}
                               name={data.Navn}
                    />
                );
            })}
            </div>
        </div>
    );
}

export default Guests;