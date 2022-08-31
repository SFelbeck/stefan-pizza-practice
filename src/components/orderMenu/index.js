import React, { useState } from 'react';

export default function OrderMenu() {
    const [products] = useState([
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
        <section id="OrderMenu" classname="OrderMenu">

            <h1 classname="order-header">What Kind of Pizza Would You Like?</h1>
            {products.map((product) => (
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <button>Add to Cart</button>
                </div>
            ))}
            <a href="/Toppings"><button classname="byoBtn">Build Your Own</button></a>
        </section>
    )
}