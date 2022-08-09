import React from 'react';

export default function Toppings() {
    return(
        <section id='toppings' classname='toppings'>
            <h1 classname='toppingsHeader'>Select Your Toppings</h1>
            <button classname="ingredient">Mozzerella</button>
            <button classname="ingredient">Parmesion</button>
            <button classname="ingredient">Pepperoni</button>
            <button classname="ingredient">Italian Sausage</button>
            <button classname="ingredient">Prosciutto</button>
            <button classname="ingredient">Mystery Meat</button>
            <button classname="ingredient">Green Sauce</button>
            <button classname="ingredient">White Sauce</button>
            <button classname="ingredient">Red Sauce</button>
            <button classname="ingredient">Mushrooms</button>
            <button classname="ingredient">Red Onion</button>
            <button classname="ingredient">Jalapenos</button>
            <button classname="ingredient">Artichoke</button>
            <br></br>
            <a href="/PzaSize"><button classname='continue'>Continue</button></a>
        </section>
    )
}