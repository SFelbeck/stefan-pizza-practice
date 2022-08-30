import React from 'react';

export default function Toppings() {
    return(
        <section id='toppings' classname='toppings'>
            <h1 classname='toppingsHeader'>Select Your Toppings</h1>
            <button id="mozz-top" classname="ingredient">Mozzerella</button>
            <button id="parm-top" classname="ingredient">Parmesion</button>
            <button id="pep-top" classname="ingredient">Pepperoni</button>
            <button id="sausage-top" classname="ingredient">Italian Sausage</button>
            <button id="pros-top" classname="ingredient">Prosciutto</button>
            <button id="mystery-top" classname="ingredient">Mystery Meat</button>
            <button id="grn-top" classname="ingredient">Green Sauce</button>
            <button id="wht-top" classname="ingredient">White Sauce</button>
            <button id="red-top" classname="ingredient">Red Sauce</button>
            <button id="mush-top" classname="ingredient">Mushrooms</button>
            <button id="onion-top" classname="ingredient">Red Onion</button>
            <button id="jala-top" classname="ingredient">Jalapenos</button>
            <button id="arti-top" classname="ingredient">Artichoke</button>
            <br></br>
            <a href="/PzaSize"><button classname='continue'>Continue</button></a>
        </section>
    )
}