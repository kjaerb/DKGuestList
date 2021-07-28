import React, {useState, useEffect} from 'react';
import logo from './vendor/img/logo.jpg';
import UserOptions from './component/options';
import Guests from './component/guests';
import GuestList from './vendor/guestlist.json';

function App() {
    //Initialize guestlist
    const [SearchText, setSearchText] = useState("");
    const [AllGuests, setAllGuests] = useState([]);
    const [FilterStatus, setFilterStatus] = useState('all')
    const [FilteredGuests, setFilteredGuests] = useState([])

    //Initialize new variables for guestlist
    var newGuestList = GuestList;
    newGuestList.forEach(element => {
        element["Arrived"] = "no";
    })
    newGuestList.sort((a, b) => a.Navn.localeCompare(b.Navn));
    
    //Runs once
    useEffect(() => {
        getLocalGuests()
        setAllGuests(newGuestList);
    }, [])

    useEffect(() => {
        var input = SearchText.toLowerCase();
        var tempList = []
        AllGuests.forEach(guest => {
            let guestName = JSON.stringify(guest.Navn).toLowerCase();
            if(guestName.includes(input)) {
                tempList.push(guest)
            }
        })
        filterHandler(tempList) 
    }, [FilterStatus, AllGuests, SearchText])

    useEffect(() => {
        
    })

    //Change guests shown
    function filterHandler(list) {
        switch(FilterStatus) {
            case 'participating':
                setFilteredGuests(list.filter((guest) => guest.Status === 'Deltager'))
                break;
            case 'not-arrived':
                setFilteredGuests(list.filter((guest) => (guest.Status === 'Deltager' || guest.Status === 'Inviteret' || guest.Status === 'Måske') && guest.Arrived === 'no'))
                break;
            case 'invited':
                setFilteredGuests(list.filter((guest) => guest.Status === 'Inviteret' || guest.Status === "Måske"))
                break;
            case 'new-participants':
                setFilteredGuests(list.filter((guest) => guest.Status === 'new-arrival'))
                break;
            case 'arrived':
                setFilteredGuests(list.filter((guest) => guest.Arrived ==='yes'))
                break;
            default: 
                setFilteredGuests(list);
                break;
        }
    }

    //Save and get local archive
    function saveLocalGuests() {
        localStorage.setItem('guests', JSON.stringify(AllGuests))
    }

    function getLocalGuests() {
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
            <UserOptions setFilterStatus={setFilterStatus}
                         setSearchText={setSearchText}
            />
            <Guests guestList={FilteredGuests}
                    setFilteredGuests={setFilteredGuests}
            />
        </div>
    );
}

export default App;