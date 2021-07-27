import React, { useState } from 'react';
import CancelLogo from '../vendor/img/cancel.svg';
import CheckLogo from '../vendor/img/check.svg';

const GuestCard = (props) => {
    const [ArrivedImg, setImg] = useState(CancelLogo)
    const [ArrivedColor, setColor] = useState('red')
    const [AlternateColor, setAlternateColor] = useState('rgb(233, 233, 233)')

    const HasArrived = () => {
        if (ArrivedImg === CancelLogo) {
            handleChange(1, 'ja')
            setImg(CheckLogo)
            setColor('rgb(0, 213, 0)')
            setAlternateColor('rgb(4, 160, 4)')
        } else {
            handleChange(-1, 'nej')
            setImg(CancelLogo)
            setColor('red')
            setAlternateColor('rgb(233, 233, 233)')
        }
    }

    function handleChange(value, arrived) {
        props.onChange(value, arrived)
    }

    return (
        <div className="guest-card"
             style={{background: AlternateColor}} 
             onClick={HasArrived}
        >
            <h3 className="guest-name">{props.name}</h3>
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