import React from "react";

function Guest(props) {
    return (
        <div className="popup_guest">
            <h1>Add new Guests</h1>
            <div>
                <h2>
                    Adults
                </h2>
                <p>Ages 13 or above</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'70px'}}>
                    <button onClick={props.HandleFilteringGuest}  onClick={() => props.setCountAdd((currentCountAdd) => currentCountAdd - 1)}>-</button>
                    <b>{props.countAdd}</b>
                    <button onClick={props.HandleFilteringGuest}  onClick={() => props.setCountAdd((currentCountAdd) => currentCountAdd + 1)}>+</button>
                </div>
            </div>
            <div>
                <h2>
                    Children
                </h2>
                <p>Ages 2-12</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'70px'}}>
                    <button onClick={props.HandleFilteringGuest}  onClick={() => props.setCountChild((currentCountChild) => currentCountChild - 1)}>-</button>
                    <b>{props.countChild}</b>
                    <button onClick={props.HandleFilteringGuest}  onClick={() => props.setCountChild((currentCountChild) => currentCountChild + 1)}>+</button>
                </div>
            </div>
        </div>
    );
    };

export default Guest;
