import React, {useState} from "react";

function Guest(props) {
    const [countAdd, setCountAdd] = useState(0);
    const [countChild, setCountChild] = useState(0);

    return (
        <div className="Add_guest">
            <div>
                <h2>
                    Adults
                </h2>
                <p>Ages 13 or above</p>
                <div>
                    {countAdd}
                    <button onClick={() => setCountAdd((currentCountAdd) => currentCountAdd - 1)}>
                        -
                    </button>
                    <button onClick={() => setCountAdd((currentCountAdd) => currentCountAdd + 1)}>
                        +
                    </button>
                </div>
            </div>
            <div>
                <h2>
                    Children
                </h2>
                <p>Ages 2-12</p>
                <div>
                    {countChild}
                    <button onClick={() => setCountChild((currentCountChild) => currentCountChild - 1)}>
                        -
                    </button>
                    <button onClick={() => setCountChild((currentCountChild) => currentCountChild + 1)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
    };

export default Guest;
