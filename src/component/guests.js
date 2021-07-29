import React, {useState, useEffect} from 'react';
import GuestCard from './guestCard';

const Guests = (props) => {
    const [ArrivedGuests, setArrivedGuests] = useState(0)

    function getArrivedGuests() {
        var count = 0;
        props.FilteredGuests.map((guest) => {
            if(guest.Arrived) {
                count = count + 1
            }
        })
        setArrivedGuests(count)

    }

    useEffect(() => {
        getArrivedGuests()
    }, [props.FilteredGuests])

    return (
        <div className="guests">
            <h1>{props.FilteredGuests.length} Gæster</h1>
            <div className="participating-guests">
                {props.FilteredGuests.map((guest, id) => {
                    if(!guest.Arrived) {
                        return (
                            <GuestCard key={id}
                                guest={guest}
                                AllGuests={props.AllGuests}
                                setAllGuests={props.setAllGuests}
                            />
                        );
                    }
                    
                })}
            </div>
            <h1>{ArrivedGuests} Ankomne gæster</h1>
            <div className="arrived-guests">
                {props.FilteredGuests.map((guest, id) => {
                    if(guest.Arrived) {
                        return (
                            <GuestCard key={id}
                                guest={guest}
                                AllGuests={props.AllGuests}
                                setAllGuests={props.setAllGuests}
                            />
                        );
                    }
                    
                })}
            </div>
        </div>
    );
}

export default Guests;