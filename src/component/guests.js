import React, { useEffect, useState } from 'react';
import GuestList from '../vendor/guestlist.json';
import GuestCard from './guestCard';

const Guests = () => {
    const [result] = useState(GuestList);

    result.sort((a, b) => a.Navn.localeCompare(b.Navn));

    const [participating, setParticipating] = useState([])
    const [participatingCount, setParticipatingCount] = useState(0)

    const [notResponded, setNotResponded] = useState([])
    const [notRespondedCount, setNotRespondedCount] = useState(0)

    function AssignGuest() {
        let tempParticipating = [];
        let tempNotResponded = [];
        // eslint-disable-next-line array-callback-return
        result.map((data) => {
            if (data.Status === 'Deltager') tempParticipating.push(data);
            else tempNotResponded.push(data);
        })
        setParticipating(tempParticipating);
        setNotResponded(tempNotResponded);
    }

    useEffect(() => {
        AssignGuest();
    }, [])

    function handleCallBack() {
        console.log("something changed")
    }

    return (
        <div className="guests">
            <h1>Deltagere: {participating.length} - Ankommet: {participatingCount} </h1>
            <div className="participating-guests">
                {participating.map((data, id) => {
                    return (
                        <GuestCard key={id}
                            name={data.Navn}
                            HasArrived={handleCallBack} />
                    );
                })}
            </div>
            <h1>Ikke reageret: {notResponded.length} - Ankommet: {notRespondedCount}</h1>
            <div className="other-guests">
                {notResponded.map((data, id) => {
                    return (
                        <GuestCard key={id}
                            name={data.Navn}
                            HasArrived={handleCallBack} />
                    );
                })}
            </div>
        </div>
    );
}

export default Guests;