import React, { useState } from 'react';
import CancelLogo from '../vendor/img/cancel.svg';
import CheckLogo from '../vendor/img/check.svg';

const GuestCard = (props) => {
    const [ArrivedImg, setImg] = useState(CancelLogo)
    const [ArrivedColor, setColor] = useState('red')
    const [counter, setCounter] = useState(0)

    const HasArrived = () => {
        if (ArrivedImg === CancelLogo) {
            setCounter(1)
            setImg(CheckLogo)
            setColor('rgb(0, 213, 0)')
        } else {
            setCounter(0)
            setImg(CancelLogo)
            setColor('red')
        }
    }

    return (
        <div className="guest-card">
            <h3 className="guest-name">{props.name}</h3>
            <div className="has-arrived" style={{ background: ArrivedColor }} onClick={HasArrived}>
                <img src={ArrivedImg} alt="ikke ankommet" />
            </div>
        </div>
    );
}

export default GuestCard;