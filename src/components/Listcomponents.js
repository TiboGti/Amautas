import React from 'react'
import Btn from './Btn';
import Card from './Card';
import Footer from './Footer';
import Hero from './Hero';


function Listcomponents() {
    return (
        <div>
            <Hero/>
            <section>
            <Btn type="regular" content="Registrate" />
            </section>
            <section>
                <Card/>
            </section>
            <section>    
                <Footer/>
            </section>
        </div>
    )
}

export default Listcomponents;
