import React, { useState } from 'react';
import SearchLogo from '../vendor/img/search.svg';
import CancelLogo from '../vendor/img/cancel.svg';
import AddLogo from '../vendor/img/add.svg';
import GuestList from '../vendor/guestlist.json';

const UserOptions = () => {
    const [img, setImg] = useState(SearchLogo)

    const SearchAction = () => {
        console.log('fired')
    }

    return (
        <div className="user-options">
            <div className="search-option">
                <img className="search-button"
                    src={img}
                    alt="søge-felt"
                    onClick={SearchAction}
                />
                <input type="text"
                    placeholder="Søg efter deltager" />
            </div>
            <div className="add-option">
                <img src={AddLogo} alt="tilføjlogo" onClick={AddGuest} />
                <h2>Tilføj deltager</h2>
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