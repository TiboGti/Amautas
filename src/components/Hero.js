import React from 'react'
import './style/hero.css'
import Navbar from './Navbar';
import { images } from '../assets/img';

function Hero() {
    return (
        <header className="header">
            <Navbar/>
            <div className="hero__content container ">
                <div className="hero__content--font">
                    <h1>
                        La aventura del conocimiento
                    </h1>
                    <p>
                    Conocer el universo en el que vivimos es una de las aventuras más geniales que podemos experimentar. Las y los mejores científicos te contagiarán de su conocimiento a través de masterclass para que disfrutes mucho más de los mundos que nos rodean.
                    <br />
                    <br />
                    Somos Amautas
                    </p>
                </div>
                <div className="hero__video">
                    <img src={images.play_big} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Hero;
