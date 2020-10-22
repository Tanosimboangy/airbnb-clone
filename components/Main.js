import React, {useState} from "react";
import Element from "./Element.js";
import stays from "./stays.json";
import Header from "./Header.js";
import Popup from "./Popup.js";


function Main() {
    let source = stays;
    for(let i = 0;source.length > i; i++){
        source[i].id = i;
    }

    const [isOpen, setIsOpen] = useState(!source);
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
    const [filterGuest, useFilterGuest] = useState(source);
    function HandleFilteringGuest(e) {
        useFilterGuest(filterGuest.filter(
            guest => guest.maxGuests >= guestTotal))
            console.log(guest);
    }

    const [filter, useFilter] = useState(source);
    function HandleFiltering(e) {
            useFilter(source.filter(result => result.city.toLowerCase() === e.target.value.toLowerCase()));
    }
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
                HandleFilteringGuest={HandleFilteringGuest}
                guestTotal={guestTotal} 
                />}
                <Header togglePopup={togglePopup}/>
            </div>
            <main>
                {filter.map(item => {
                    return (
                        <section key={item.id}>
                            <Element item={item}/>  
                        </section>
                    )})}
            </main>
        </div>
    )}
export default Main;

{/* <div>
    <ul>
        <li><h2>Stays in Finland</h2></li>
        <li><p>{source.city} + stays</p></li>
    </ul>
</div> */}