import React from 'react';

export default function Element({item}) {
    return (
        <>
            <div className="container">
                <img src={item.photo} />
                <div className="lists">
                <ul style={{display: "flex", flexDirection:'row'}}>
                        <li>
                            <ul>
                                <li>{item.superHost && <p>superhost</p>}</li>
                                <li>{item.type}. {item.beds}beds</li>
                            </ul>
                        </li>
                        <li><p><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"  fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>{item.rating}</p></li>
                    </ul>
                    <p>{item.title}</p>
                </div>
            </div>
        </>
    )
}
