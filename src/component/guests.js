import React from 'react';
import GuestCard from './guestCard';

const Guests = (props) => {
    return (
        <div className="guests">
            <h1>{props.FilteredGuests.length} Gæster</h1>
            <div className="participating-guests">
                {props.FilteredGuests.map((guest, id) => {
                    return (
                        <GuestCard key={id}
                            guest={guest}
                            AllGuests={props.AllGuests}
                            setAllGuests={props.setAllGuests}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Guests;