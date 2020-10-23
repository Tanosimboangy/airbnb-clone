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
    
    
    function HandleFiltering(e) {
        setAllStays(GuestNumbers.filter(result => result.city.toLowerCase() === e.target.value.toLowerCase()));
    }
    
    const GuestNumbers = allStays.filter(guest => guest.maxGuests >= guestTotal);
    console.log(GuestNumbers);
    
    return (
        <div>
            <div>
                {isOpen && <Popup 
                HandleFiltering={HandleFiltering} 
                toggleGuest={toggleGuest} 
                togglePopup={togglePopup} 
                handleClose={togglePopup} 
                addguest={addguest} 
                toggleGuest={toggleGuest}
                countAdd={countAdd} 
                setCountAdd={setCountAdd} 
                countChild={countChild} 
                setCountChild={setCountChild} 
                GuestNumbers={GuestNumbers}
                guestTotal={guestTotal} 
                />}
                <Header togglePopup={togglePopup}/>
            </div>
            <main>
                {GuestNumbers.map(item => {
                    return (
                        <section key={item.id}>
                            <Element item={item}/>  
                        </section>
                    )})}
            </main>
        </div>
    )}
export default Main;
