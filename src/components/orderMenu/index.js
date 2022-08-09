import React from 'react';

export default function OrderMenu() {
    return(
        <section id="OrderMenu" classname="OrderMenu">
            <h1 classname="order-header">What Kind of Pizza Would You Like?</h1>
            <button classname="pepBtn">Pepperoni</button>
            <button classname="chzBtn">Four Cheese</button>
            <button classname="pestoBtn">Pesto</button>
            <button classname="seafoodBtn">Seafood</button>
            <a href="/Toppings"><button classname="byoBtn">Build Your Own</button></a>
        </section>
    )
}