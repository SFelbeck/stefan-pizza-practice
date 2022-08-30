import React from 'react';

export default function Addons() {
    return(
        <section id='addons' classname='addons'>
            <h1 classname='adds-header'>Additional Items</h1>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Soda</h3>
                <button id="add-soda">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Mozzerella Sticks</h3>
                <button id="add-mozzstx">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Garlic Bread</h3>
                <button id="add-gbread">Add to Cart</button>
            </div>
            <div id="product">
                <img src='http://placekitten.com/200/200' alt="soda"></img>
                <h3>Jimmy's Lasagna</h3>
                <button id="add-lasagna">Add to Cart</button>
            </div>
            <a href="#"><button className='continue'>Continue</button></a>
        </section>
    )
}