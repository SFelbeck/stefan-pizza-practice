import React from 'react';

export default function PzaSize() {
    return(
        <section id='pza-size' claasname='pza-size'>
            <h1 classname='sizeheader'>What Size Pizza Would You Like?</h1>
            <button id="small" classname='size'>Small 12"</button>
            <br></br>
            <button id="med" classname='size'>Medium 18"</button>
            <br></br>
            <button id="lrg" classname='size'>Large 24"</button>
            <br></br>
            <a href="/Addons"><button id="cont-btn" classname='continue'>Continue</button></a>
        </section>
    )
}