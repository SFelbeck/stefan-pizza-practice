import React from 'react';

export default function PzaSize() {
    return(
        <section id='pza-size' className='pza-size'>
            <h1 className='sizeheader'>What Size Pizza Would You Like?</h1>
            <button id="small" className='size'>Small 12"</button>
            <br></br>
            <button id="med" className='size'>Medium 18"</button>
            <br></br>
            <button id="lrg" className='size'>Large 24"</button>
            <br></br>
            <a href="/Addons"><button id="cont-btn" className='continue'>Continue</button></a>
        </section>
    )
}