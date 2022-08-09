import React from 'react';

export default function Navbar(){
    return(
        <header className='header'>
            <img src="http://placekitten.com/200/200" alt="pizzachef"/>
            <nav>
                <a href="/">Home</a>
                <a href="/Menu">Menu</a>
                <a href="/OrderMenu">Order</a>
            </nav>
        </header>
    )
}