import React, { useState } from 'react';
import CancelLogo from '../vendor/img/cancel.svg';
import CheckLogo from '../vendor/img/check.svg';

const GuestCard = (props, onChange) => {
    const [ArrivedImg, setImg] = useState(CancelLogo)
    const [ArrivedColor, setColor] = useState('red')

    const HasArrived = () => {
        if (ArrivedImg === CancelLogo) {
            handleChange(1)
            setImg(CheckLogo)
            setColor('rgb(0, 213, 0)')
        } else {
            handleChange(-1)
            setImg(CancelLogo)
            setColor('red')
        }
    }

    function handleChange(value) {
        props.onChange(value)
    }

    return (
        <div className="guest-card">
            <h3 className="guest-name">{props.name}</h3>
            <div className="has-arrived"
                style={{ background: ArrivedColor }}
                onClick={HasArrived} >
                <img src={ArrivedImg}
                    alt="ikke ankommet" />
            </div>
        </div>
    );
}

export default GuestCard;