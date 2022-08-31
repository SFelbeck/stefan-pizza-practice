import React, { useState } from 'react';

export default function Addons() {
    const [products] = useState([
        {
            name: 'Soda',
            cost: '$1.50',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: 'Mozzerella Sticks',
            cost: '$5.35',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: 'Garlic Bread',
            cost: '$7.00',
            image: 'http://placekitten.com/200/200'
        },
        {
            name: "Jimmy's Lasagna",
            cost: '$0.00',
            image: 'http://placekitten.com/200/200'
        }
    ])
    return(
        <section id='addons' classname='addons'>
            <h1 classname='adds-header'>Additional Items</h1>
            {products.map((product) => (
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <button>Add to Cart</button>
                </div>
            ))}
            <a href="#"><button className='continue'>Continue</button></a>
        </section>
    )
}