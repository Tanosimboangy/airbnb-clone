import React, {useState} from "react";

function Guest(props) {
    const [countAdd, setCountAdd] = useState(0);
    const [countChild, setCountChild] = useState(0);

    return (
        <div className="box">
            <h1>Add new Guests</h1>
            <div>
                <h2>
                    Adults
                </h2>
                <p>Ages 13 or above</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'70px'}}>
                    <button onClick={() => setCountAdd((currentCountAdd) => currentCountAdd - 1)}>-</button>
                    <b>{countAdd}</b>
                    <button onClick={() => setCountAdd((currentCountAdd) => currentCountAdd + 1)}>+</button>
                </div>
            </div>
            <div>
                <h2>
                    Children
                </h2>
                <p>Ages 2-12</p>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'70px'}}>
                    <button onClick={() => setCountChild((currentCountChild) => currentCountChild - 1)}>-</button>
                    <b>{countChild}</b>
                    <button onClick={() => setCountChild((currentCountChild) => currentCountChild + 1)}>+</button>
                </div>
            </div>
        </div>
    );
    };

export default Guest;
