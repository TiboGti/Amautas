import React from 'react'
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Tgas from './Tgas';

import {banner_2, banner_1} from '../api/BannerData'
import Banner from './Banner';
import Bagets from './Bagets';


function Listcomponents() {
    return (
        <div>
            <Hero/>

            <div className="">
                <Bagets/>
            </div>
            
            <div className="main__backg">
            <section>
                <Cards/>
            </section>
            <section>
                <Banner title={banner_1.title} text={banner_1.text} type={banner_1.type} content={banner_1.content} />
            </section>
            <section>
                <Tgas/>
            </section>
            <section>
                <Banner title={banner_2.title} text={banner_2.text} type={banner_2.type} content="&#x279C;" />
                <div className="separador">
                    
                </div>
            </section>
            </div>
                <Footer/>
            
        </div>
    )
}

export default Listcomponents;
