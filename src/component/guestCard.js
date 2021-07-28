import React, { useState, useEffect } from 'react';
import CancelLogo from '../vendor/img/cancel.svg';
import CheckLogo from '../vendor/img/check.svg';

const GuestCard = (props) => {
    const [ArrivedImg, setImg] = useState(CancelLogo)
    const [ArrivedColor, setColor] = useState('red')
    const [AlternateColor, setAlternateColor] = useState('rgb(233, 233, 233)')

    const statusHandler = () => {
        if (ArrivedImg === CancelLogo) {
            arrivedHandler()
            setImg(CheckLogo)
            setColor('rgb(0, 213, 0)')
            setAlternateColor('rgb(4, 160, 4)')
        } else {
            arrivedHandler()
            setImg(CancelLogo)
            setColor('red')
            setAlternateColor('rgb(233, 233, 233)')
        }
    }

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
        <div className="guest-card"
            style={{ background: AlternateColor }}
            onClick={statusHandler}
        >
            <h3 className="guest-name">{props.guest.Navn}</h3>
            <div className="has-arrived"
                style={{ background: ArrivedColor }}
            >
                <img src={ArrivedImg}
                    alt="ikke ankommet" />
            </div>
        </div>
    );
}

export default GuestCard;
