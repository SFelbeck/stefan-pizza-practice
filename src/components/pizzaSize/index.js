import React from 'react';

export default function PzaSize() {
    return(
        <section id='pza-size' claasname='pza-size'>
            <h1 classname='sizeheader'>What Size Pizza Would You Like?</h1>
            <button classname='size'>Small 12"</button>
            <button classname='size'>Medium 18"</button>
            <button classname='size'>Large 24"</button>
            <a href="/Addons"><button classname='continue'>Continue</button></a>
        </section>
    )
}