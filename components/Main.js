import React, {useState} from "react";
import Element from "./Element.js";
import stays from "./stays.json";
import Header from "./Header.js";
import Popup from "./Popup.js";
import Guest from "./Guest.js";


function Main() {
    let source = stays;
    for(let i = 0;source.length > i; i++){
        source[i].id = i;
   }

   const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [addguest, setAddguest] = useState(false);
    const toggleGuest = () => {
        setAddguest(!addguest);
    }

   const [filter, useFilter] = useState(source);
   function HandleFiltering(e) {
        useFilter(source.filter(result => result.city.toLowerCase() === e.target.value.toLowerCase()));
   }

    return (
        <div>
            <div>
                <Header togglePopup={togglePopup}/>
                {isOpen && <Popup HandleFiltering={HandleFiltering} toggleGuest={toggleGuest} togglePopup={togglePopup} handleClose={togglePopup}/> || addguest && <Guest toggleGuest={toggleGuest}/>}
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