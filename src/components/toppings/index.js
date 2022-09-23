import React from 'react';

export default function Toppings() {
    return(
        <section id='toppings' className='toppings'>
            <h1 className='toppingsHeader'>Select Your Toppings</h1>
            <button id="mozz-top" className="ingredient">Mozzerella</button>
            <button id="parm-top" className="ingredient">Parmesion</button>
            <button id="pep-top" className="ingredient">Pepperoni</button>
            <button id="sausage-top" className="ingredient">Italian Sausage</button>
            <button id="pros-top" className="ingredient">Prosciutto</button>
            <button id="mystery-top" className="ingredient">Mystery Meat</button>
            <button id="grn-top" className="ingredient">Green Sauce</button>
            <button id="wht-top" className="ingredient">White Sauce</button>
            <button id="red-top" className="ingredient">Red Sauce</button>
            <button id="mush-top" className="ingredient">Mushrooms</button>
            <button id="onion-top" className="ingredient">Red Onion</button>
            <button id="jala-top" className="ingredient">Jalapenos</button>
            <button id="arti-top" className="ingredient">Artichoke</button>
            <br></br>
            <a href="/PzaSize"><button className='continue'>Continue</button></a>
        </section>
    )
}