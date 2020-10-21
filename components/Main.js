import React, {useState} from "react";
import Element from "./Element.js";
import stays from "./stays.json";
import Header from "./Header.js";
import Popup from "./Popup";


function Main() {
    let source = stays;
    for(let i = 0;source.length > i; i++){
        source[i].id = i;
   }

   const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

   const [filter, useFilter] = useState(source);
   function HandleFiltering(e) {
        useFilter(source.filter(result => result.city.toLowerCase() === e.target.value.toLowerCase()));
    // console.log(filter);
   }

    return (
        <div>
            <div>
                <Header togglePopup={togglePopup}/>
                {isOpen && <Popup HandleFiltering={HandleFiltering} togglePopup={togglePopup} handleClose={togglePopup}/>}
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