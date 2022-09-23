import React, { useState } from 'react';

export default function OrderMenu() {
    const [cart, setCart] = useState([]);

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

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return(
        <section id="OrderMenu" className="order-menu">

            <h1 className="order-header">What Kind of Pizza Would You Like?</h1>
            <div className='products'>
                {products.map((product, index) => (
                    <div className='product' key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <a href="/Toppings"><button className="byo-btn">Build Your Own</button></a>
        </section>
    )
}