import React from "react";
import Element from "./Element.js";
import stays from "./stays.json";

function Main() {
    let source = stays;
    return (
        source.map(item =>  {
            return (
                <section>
                    <Element item={item}/>  
                </section>
            )
        })
    )
}

export default Main;