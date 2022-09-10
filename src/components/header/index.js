import React from 'react';
import Navtabs from '../navtabs';

export default function Header(){
    return(
        <header className='header'>
            <img src="http://placekitten.com/100/100" alt="pizzachef"/>
            <Navtabs />
        </header>
    )
}