import React, {useState} from "react";
import Element from "./Element.js";
import stays from "./stays.json";
import Header from "./Header.js";
import Popup from "./Popup.js";


function Main() {
    const [allStays, setAllStays] = useState(stays);

    for(let i = 0;allStays.length > i; i++){
        allStays[i].id = i;
    }

    const [isOpen, setIsOpen] = useState(!allStays);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [addguest, setAddguest] = useState(false);
    const toggleGuest = () => {
        setAddguest(!addguest);
    }
    
    const [countAdd, setCountAdd] = useState(0);
    const [countChild, setCountChild] = useState(0);
    let guestTotal = countAdd + countChild;
    
    
    const GuestNumbers = allStays.filter(guest => guest.maxGuests >= guestTotal);
    
    function HandleFiltering(e) {
        setAllStays(GuestNumbers.filter(result => result.city.toLowerCase() === e.target.value.toLowerCase()));
    }
    
    return (
        <>
            <>
                {isOpen && <Popup 
                    HandleFiltering={HandleFiltering} 
                    togglePopup={togglePopup} 
                    handleClose={togglePopup}
                    addguest={addguest}
                    setAddguest={setAddguest}
                    toggleGuest={toggleGuest}
                    countAdd={countAdd}
                    setCountAdd={setCountAdd}
                    countChild={countChild}
                    setCountChild={setCountChild}
                    guestTotal={guestTotal}
                    GuestNumbers={GuestNumbers}
                />}
                <Header togglePopup={togglePopup}/>
            </>
            <main>
                {GuestNumbers.map(item => {
                    return (
                        <section key={item.id}>
                            <Element item={item}/>  
                        </section>
                    )})}
            </main>
        </>
    )}
export default Main;
