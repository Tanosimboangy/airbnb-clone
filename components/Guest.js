import React from "react"; 
function Guest({HandleFiltering, handleClose, addguest, setAddguest, toggleGuest, countAdd, setCountAdd, countChild, setCountChild, guestTotal, GuestNumbers}) {

    function handleCountAddDecrement() {
        if (countAdd > 0) {
            setCountAdd(prev => prev - 1)
        }
    }
    function handleCountAddIncrement() {
        setCountAdd(prev => prev + 1)
        
    }
    function handleCountChildDecrement() {
        if (countChild > 0) {
            setCountChild(prev => prev - 1)
        }
    }
    function handleCountChildIncrement() {
        setCountChild(prev => prev + 1)
    }
    return (
        <div className="popup_guest">
            <h1>Add new Guests</h1>
            <div>
                <h2>Adults</h2>
                <p>Ages 13 or above</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'100px'}}>
                    <button onClick={handleCountAddDecrement}>-</button>
                    <b>{countAdd}</b>
                    <button onClick={handleCountAddIncrement}>+</button>
                </div>
            </div>
            <div>
                <h2>Children</h2>
                <p>Ages 2-12</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'100px'}}>
                    <button onClick={GuestNumbers}  onClick={handleCountChildDecrement}>-</button>
                    <b>{countChild}</b>
                    <button onClick={GuestNumbers}  onClick={handleCountChildIncrement}>+</button>
                </div>
            </div>
        </div>
    );
    };

export default Guest;
