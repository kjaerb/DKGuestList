import React, { useState, useEffect } from 'react';
import logo from './vendor/img/logo.jpg';
import UserOptions from './component/options';
import Guests from './component/guests';
import GuestList from './vendor/guestlist.json';

function App() {
    //Initialize guestlist
    const [SearchText, setSearchText] = useState("");
    const [AllGuests, setAllGuests] = useState(GuestList);
    const [FilterStatus, setFilterStatus] = useState('all')
    const [FilteredGuests, setFilteredGuests] = useState([])

    //Runs once. Add arrived status to list
    useEffect(() => {
        AllGuests.forEach(element => {
            element["Arrived"] = false;
        })
        AllGuests.sort((a, b) => a.Navn.localeCompare(b.Navn));
    }, [])

    //Search option
    useEffect(() => {
        var input = SearchText.toLowerCase();
        var tempGuestList = []
        AllGuests.forEach(guest => {
            let guestName = guest.Navn.toLowerCase();
            if (guestName.includes(input)) {
                tempGuestList.push(guest)
            }
        })
        filterHandler(tempGuestList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [FilterStatus, AllGuests, SearchText])

    //Change guests shown
    function filterHandler(list) {
        switch (FilterStatus) {
            case 'participating':
                setFilteredGuests(list.filter((guest) => guest.Status === 'Deltager' && guest.Arrived === false))
                break;
            case 'not-arrived':
                setFilteredGuests(list.filter((guest) => (guest.Status === 'Deltager' || guest.Status === 'Inviteret' || guest.Status === 'Måske') && guest.Arrived === false))
                break;
            case 'invited':
                setFilteredGuests(list.filter((guest) => (guest.Status === 'Inviteret' || guest.Status === "Måske") && guest.Arrived === false))
                break;
            case 'new-participants':
                setFilteredGuests(list.filter((guest) => guest.Status === 'new-arrival'))
                break;
            case 'arrived':
                setFilteredGuests(list.filter((guest) => guest.Arrived === true))
                break;
            default:
                setFilteredGuests(list);
                break;
        }
    }

    return (
        <div className="wrapper">
            <div className="header">
                <img src={logo} alt="dksommerfest2021" />
                <h1 className="header-text">Gæsteliste til DK sommerfest 2021</h1>
            </div>
            <UserOptions setFilterStatus={setFilterStatus}
                setSearchText={setSearchText}
            />
            <Guests FilteredGuests={FilteredGuests}
                AllGuests={AllGuests}
                setFilteredGuests={setFilteredGuests}
                setAllGuests={setAllGuests}
            />
        </div>
    );
}

export default App;