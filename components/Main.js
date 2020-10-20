import React from "react";
import Element from "./Element.js";
import stays from "./stays.json";

function Main() {
    let source = stays;
    for(let i = 0;source.length > i; i++){
        source[i].id = i;
   }
    return (
        source.map(item => {
            return (
                <section key={item.id}>
                    <Element item={item} />  
                </section>
            )
        })
    )
}

export default Main;