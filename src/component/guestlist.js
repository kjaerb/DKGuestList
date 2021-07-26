import React from 'react';
import guests from '../vendor/guestlist.json';
import CheckCard from './checklistcard';

const ParticipatingGuests = () => {
    return (
        <>
            {
                guests.map((data) => {
                    if(data.Status === 'Deltager') {
                        return(
                            <CheckCard key={data.Navn}
                                       name={data.Navn}
                            />
                        );
                    }
                    else {
                        return(<></>);
                    }
                    
                })
            }
        </>
    );
}

const NotParticipatingGuests = () => {
    return (
        <>
            {
                guests.map((data) => {
                    if(data.Status === 'Inviteret') {
                        return(
                            <CheckCard key={data.Navn}
                                       name={data.Navn}
                            />
                        );
                    }
                    else {
                        return(<></>);
                    }
                    
                })
            }
        </>
    );
}
    

export {
    ParticipatingGuests,
    NotParticipatingGuests
};