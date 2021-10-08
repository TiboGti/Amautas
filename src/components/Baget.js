import React from 'react'
import { images } from '../assets/img';
import './style/baget.css'

function Baget(props) {
    return (
        <div className="baget"  >
            <div className="baget__card">
                <div className="card--anuncio">
                Proximo Directo
                </div>
                <img src={props.img} alt="imagen cards" />
            </div>
            <div className="baget__content">
                <div className="baget__content--header">
                    <p>
                    {props.title}
                    </p>
                </div>
                <div className="baget__content--body">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="baget__content--footer">
                    <div className="content--footer-info">
                        <p>
                            {props.date}
                        </p>
                    </div>
                    <div className="content--footer-btn1">
                        <p>
                            <img src={images.calendar} alt="icono calendario" />  Agendar
                        </p>
                    </div>
                    <div className="content--footer-btn2">
                        <p>
                            <img src={images.play} alt="icono play" /> Ver Directo
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Baget;
