import React, { useState } from 'react';

export default function Menu() {
    const [items] = useState([
        {
            name: 'Pepperoni',
            cost: '$22.30',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: 'Four Cheese',
            cost: '$20.00',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: 'Pesto',
            cost: '$25.80',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: 'Seafood',
            cost: '$30.00',
            image: 'http://placekitten.com/200/200'
        }
    ])

    return(
        <section id="menu" className="menu">
            <h1 classname="menu-header">Menu</h1>

            <div className='items'>
            {items.map((item, idx) => (
                    <div className='item' key={idx}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <h4>{item.cost}</h4>
                    </div>
            ))}
            </div>
        </section>
    )
}