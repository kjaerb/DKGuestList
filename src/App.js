import React, {useState, useEffect} from 'react';
import logo from './vendor/img/logo.jpg';
import UserOptions from './component/options';
import Guests from './component/guests';
import GuestList from './vendor/guestlist.json';

function App() {
    //Initialize guestlist
    const [AllGuests, setAllGuests] = useState([]);
    const [FilteredGuests, setFilteredGuests] = useState([])

    //Initialize new variables for guestlist
    var newGuestList = GuestList;
    newGuestList.forEach(element => {
        element["Ankommet"] = "nej";
    })
    newGuestList.sort((a, b) => a.Navn.localeCompare(b.Navn));
    
    //Runs once
    useEffect(() => {
        setAllGuests(newGuestList)
    }, [])

    useEffect(() => {
        filterHandler()
    }, [FilteredGuests])

    const filterHandler = () => {
        switch(AllGuests.Status) {
            case 'Deltager':
                console.log("fired")
                break;
            default: 
                console.log("fired")
                setFilteredGuests(AllGuests);
                break;
        }
    }

    function saveLocal() {
        localStorage.setItem('guests', JSON.stringify(AllGuests))
    }

    function getLocal() {
        if(localStorage.getItem('guests') === null) {
            localStorage.setItem('guests', JSON.stringify([]));
        } else {
            let guestsLocal = JSON.parse(localStorage.getItem('guests'));
            setAllGuests(guestsLocal)
        }
    }

    return (
        <div className="wrapper">
        <div className="header">
            <img src={logo} alt="dksommerfest2021" />
            <h1 className="header-text">Gæsteliste til DK sommerfest 2021</h1>
        </div>
            <UserOptions />
            <Guests />
        </div>
    );
}

export default App;