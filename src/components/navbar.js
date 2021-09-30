import React from 'react'
import './style/navbar.css'
import Btn from './Btn';
import {images} from '../assets/img'
import Search from './Search';

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="navbar__logo">
                    <img src={images.logo_color} alt="Logo Amautas" />
                </div>
                <div className="navbar__items">
                    <ul>
                        <li>Cursos</li>
                        <li>Directos</li>
                        <li>Comunidad</li>
                        <li>Hazte Mecena</li>
                    </ul>
                </div>
                <div className="navbar__btn">
                    
                    <Search/>
                    <img src={images.avatar} alt="" className="avater" />
                    <Btn type="regular" content="Registrate" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
