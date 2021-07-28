import React, { useState } from 'react';
import SearchLogo from '../vendor/img/search.svg';
import AddLogo from '../vendor/img/add.svg';
import GuestList from '../vendor/guestlist.json';

const UserOptions = (props) => {
    const [img, setImg] = useState(SearchLogo)

    const SearchAction = (e) => {
        props.setSearchText(e.target.value)
    }

    const StatusHandler = (e) => {
        props.setFilterStatus(e.target.value)
    }

    return (
        <div className="user-options">
            <div className="search-option">
                <img className="search-button"
                    src={img}
                    alt="søge-felt"
                    
                />
                <input type="text"
                    placeholder="Søg efter deltager"
                    onChange={SearchAction} />
            </div>
            <div className="add-option">
                <img src={AddLogo} alt="tilføjlogo" onClick={AddGuest} />
                <h2>Tilføj deltager</h2>
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

const AddGuest = () => {
    console.log('fired')
    var newGuest = {
        "Navn": "hello",
        "Status": "test"
    }

    GuestList.push(JSON.stringify(newGuest));
}




export default UserOptions;