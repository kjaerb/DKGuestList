import React, { useState, useEffect } from 'react';
import SearchLogo from '../vendor/img/search.svg';
import AddLogo from '../vendor/img/add.svg';
import CheckLogo from '../vendor/img/check.svg';
import CancelLogo from '../vendor/img/cancel.svg';

const UserOptions = (props) => {
    const [isGuestAdderShown, setIsGuestAdderShown] = useState(false);
    var guestInput = document.querySelector('.guest-input')

    const SearchAction = (e) => {
        props.setSearchText(e.target.value)
    }

    const StatusHandler = (e) => {
        props.setFilterStatus(e.target.value)
    }

    const AddGuestHandler = () => {
        if (isGuestAdderShown) {
            setIsGuestAdderShown(false)
            guestInput.value = ''
        } else {
            setIsGuestAdderShown(true)
        }
    }

    const AddParticipantHandler = () => {
        if (guestInput.value !== '') {
            let guestExists = false;
            props.AllGuests.map((guest) => {
                if (guest.Navn === guestInput.value) guestExists = true;
            })
            if (!guestExists) {
                let newGuest = { "Arrived": true, "Status": "new-guest", "Navn": guestInput.value }
                let tempList = props.AllGuests
                tempList.push(newGuest)
                props.setAllGuests(tempList)
                alert(`${guestInput.value} er tilføjet til listen`)
                AddGuestHandler()
            } else {
                alert("Gæst findes allerede")
            }

        } else {
            alert("Indtast navn for at tilføje til listen")
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
                    <img onClick={AddParticipantHandler} src={CheckLogo} alt="tilføj" />
                    <input className="guest-input" type="text" placeholder="Navn" />
                    <img onClick={AddGuestHandler} src={CancelLogo} alt="anuller" />
                </div>
            </div>
            <div className="arrived-option">
                <select onChange={StatusHandler} name="guests" className="filter-guests">
                    <option value="all">Alle</option>
                    <option value="not-arrived">Ikke ankommet</option>
                    <option value="participating">Deltager</option>
                    <option value="invited">Inviteret &amp; Måske</option>
                    <option value="new-guest">Nye deltagere</option>
                    <option value="arrived">Ankommet</option>
                </select>
            </div>
        </div>
    );
}

export default UserOptions;