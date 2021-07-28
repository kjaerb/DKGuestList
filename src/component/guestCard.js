import React from 'react';

const GuestCard = (props) => {
    const arrivedHandler = () => {
        props.setAllGuests(props.AllGuests.map((item) => {
            if (item.Navn === props.guest.Navn) {
                return {
                    ...item, Arrived: !item.Arrived
                }
            }
            return item;
        }))
    }

    return (
        <div className={`guest-card ${props.guest.Arrived ? 'guest-arrived' : ''}`}
            onClick={arrivedHandler}
        >
            <h3 className="guest-name">{props.guest.Navn}</h3>
            <div className="has-arrived"
            >
                <div className="arrived-img"></div>
            </div>
        </div>
    );
}

export default GuestCard