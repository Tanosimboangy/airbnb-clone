import React from 'react';

export default function Element({item}) {
    return (
        <div className="container">
            <img src={item.photo} />

            <p>{item.superHost}</p>
            <ul className="lists">
                <li>
                    <ul>
                        <li><p>{item.type} {item.beds}</p></li>
                        <li><p>{item.rating}</p></li>
                    </ul>
                </li>
                <li><p>{item.title}</p></li>
            </ul>
        </div>
    )
}
