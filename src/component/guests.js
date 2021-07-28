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
                            FilteredGuests={props.FilteredGuests}
                            setAllGuests={props.setAllGuests}
                            setFilteredGuests={props.setFilteredGuests}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Guests;