import React, { useEffect, useState } from 'react';
import GuestList from '../vendor/guestlist.json';
import GuestList_Copy from '../vendor/guestlist_copy.json';
import GuestCard from './guestCard';

const Guests = () => {
    const [participating, setParticipating] = useState([])
    const [participatingCount, setParticipatingCount] = useState(0)

    const [notResponded, setNotResponded] = useState([])
    const [notRespondedCount, setNotRespondedCount] = useState(0)

    const [newGuests, setNewGuests] = useState([])



    function AssignGuest() {
        let tempParticipating = [];
        let tempNotResponded = [];
        GuestList.forEach(element => {
            element["Ankommet"] = "nej"
        })
        GuestList.sort((a, b) => a.Navn.localeCompare(b.Navn));
        GuestList.map((data) => {
            if (data.Status === 'Deltager') tempParticipating.push(data);
            else tempNotResponded.push(data);
        })
        setParticipating(tempParticipating);
        setNotResponded(tempNotResponded);

    }

    useEffect(() => {
        AssignGuest();
    }, [])

    function updateParticipating(value, arrived) {
        setParticipatingCount(participatingCount + value)
    }

    function updateNotResponded(value) {
        setNotRespondedCount(notRespondedCount + value)
    }

    return (
        <div className="guests">
            <h1>Deltagere: {participating.length} | Ankommet: {participatingCount} </h1>
            <div className="participating-guests">
                {participating.map((data, id) => {
                    if(data.Ankommet === 'nej') {
                        return (
                            <GuestCard key={id}
                                name={data.Navn}
                                onChange={updateParticipating} />
                        );
                    } else return(<></>)
                })}
            </div>
            <h1>Inviteret: {notResponded.length} | Ankommet: {notRespondedCount}</h1>
            <div className="other-guests">
                {notResponded.map((data, id) => {
                    return (
                        <GuestCard key={id}
                            name={data.Navn}
                            onChange={updateNotResponded} />
                    );
                })}
            </div>
            <h1>Nye deltagere: {newGuests.length} </h1>
            <div className="new-guests">

            </div>
        </div>
    );
}

export default Guests;