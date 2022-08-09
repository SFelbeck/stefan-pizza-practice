import React from 'react';

export default function Menu() {
    return(
        <section id="menu" classname="menu">
            <h1 classname="menu-header">Menu</h1>

            <section id="pepperoni" className="pizza-choice">
                <img src='http://placekitten.com/200/200' alt="pepperoni"/>
                <h3>Pepperoni</h3>
            </section>

            <section id="four-cheese" className="pizza-choice">
                <img src='http://placekitten.com/200/200' alt="cheese pizza"/>
                <h3>Four Cheese</h3>
            </section>

            <section id="pesto" className="pizza-choice">
                <img src="http://placekitten.com/200/200" alt="pesto Pizza"/>
                <h3>Pesto</h3>
            </section>

            <section id="seafood" className="pizza-choice">
                <img src="http://placekitten.com/200/200" alt="seafood Pizza"/>
                <h3>Seafood</h3>
            </section>
        </section>
    )
}