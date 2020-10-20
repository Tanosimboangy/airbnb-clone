import React from 'react';

export default function Element({item}) {
    return (
        <div className="container">
            <img src={item.photo} />
            <p>{item.superHost}</p>
            <p>{item.type}</p>
            <p>{item.beds}</p>
            <p>{item.rating}</p>
            <p>{item.title}</p>
        </div>
    )
}
