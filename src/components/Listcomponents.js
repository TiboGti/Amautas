import React from 'react'
import Btn from './Btn';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import {carData} from '../api/CarsData'

function Listcomponents() {
    return (
        <div>
            <Hero/>
            <section>
            <Btn type="regular" content="Registrate" />
            </section>
            <section>
                <Cards/>
            </section>
            <section>    
                <Footer/>
            </section>
        </div>
    )
}

export default Listcomponents;
