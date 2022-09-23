import React from 'react';
import Cart from '../cart';

export default function Navtabs() {
    return(
        <nav>
            {/* <a href="/Cart">Cart ({cart.length})</a> */}
            <a href="/Menu">Menu</a>
            <a href="/OrderMenu">Order</a>
            <a href="/">Home</a>
        </nav>
    )
}