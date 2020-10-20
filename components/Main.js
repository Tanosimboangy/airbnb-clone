import React from "react";
import Element from "./components/Element.js";
import stays from "./components/stays.json";

export default function Main() {
    let source = stays;
    return (
        source.map(item =>  {
            return (
                <div>
                    <Element item={item}/>  
                </div>
            )
        })
    )
}
