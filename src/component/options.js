import React, { useState } from 'react';
import SearchLogo from '../vendor/img/search.svg';
import AddLogo from '../vendor/img/add.svg';
import CheckLogo from '../vendor/img/check.svg';
import CancelLogo from '../vendor/img/cancel.svg';

const UserOptions = (props) => {
    const [isGuestAdderShown, setIsGuestAdderShown] = useState(false);

    const SearchAction = (e) => {
        props.setSearchText(e.target.value)
    }

    const StatusHandler = (e) => {
        props.setFilterStatus(e.target.value)
    }

    const AddGuestHandler = () => {
        var guestInput = document.querySelector('.guest-input')
        if (isGuestAdderShown) {
            setIsGuestAdderShown(false)
            guestInput.value = ''
        } else {
            setIsGuestAdderShown(true)
        }
    }

    return (
        <div className="user-options">
            <div className="search-option">
                <img className="search-button"
                    src={SearchLogo}
                    alt="søge-felt"

                />
                <input type="text"
                    placeholder="Søg efter deltager"
                    onChange={SearchAction} />
            </div>
            <div className="add-option">
                <div onClick={AddGuestHandler} className={`add-participant ${isGuestAdderShown ? 'hidden' : ''}`}>
                    <img src={AddLogo} alt="tilføjlogo" />
                    <h2>Tilføj deltager</h2>
                </div>
                <div className={`add-participant-info ${isGuestAdderShown ? 'visible' : ''}`}>
                    <img src={CheckLogo} alt="tilføj" />
                    <input className="guest-input" type="text" placeholder="Navn" />
                    <img onClick={AddGuestHandler} src={CancelLogo} alt="anuller" />
                </div>
            </div>
            <div className="arrived-option">
                <select onChange={StatusHandler} name="guests" className="filter-guests">
                    <option value="all">Alle</option>
                    <option value="not-arrived">Ikke ankomne</option>
                    <option value="participating">Deltager</option>
                    <option value="invited">Inviteret</option>
                    <option value="new-participants">Nye deltagere</option>
                    <option value="arrived">Ankomne</option>
                </select>
            </div>
        </div>
    );
}

export default UserOptions;