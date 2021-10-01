import React from 'react'
import Btn from './Btn';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Tgas from './Tgas';


function Listcomponents() {
    return (
        <div>
            <Hero/>
            
            <section>
                <Cards/>
            </section>
            <section>
                <Tgas/>
            </section>
            <section>    
                <Footer/>
            </section>
        </div>
    )
}

export default Listcomponents;
