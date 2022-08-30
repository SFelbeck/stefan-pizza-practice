import React from 'react';

export default function OrderMenu() {
    return(
        <section id="OrderMenu" classname="OrderMenu">
            <h1 classname="order-header">What Kind of Pizza Would You Like?</h1>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Pepperoni</h3>
                <button id="add-peppza">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Four Cheese</h3>
                <button id="add-chzpza">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Pesto</h3>
                <button id="add-pestopza">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Seafood</h3>
                <button id="add-seapza">Add to Cart</button>
            </div>
            <button classname="seafoodBtn">Seafood</button> */}
            <a href="/Toppings"><button classname="byoBtn">Build Your Own</button></a>
        </section>
    )
}