import React from 'react'
import './style/baget.css'

function Baget() {
    return (
        <div className="baget">
            <div className="baget__card">
                <img src="" alt="" />
            </div>
            <div className="baget__content">
                <div className="baget__content--header">
                    <p>
                    "Experimentos científicos del Apollo 15" con Aldo Bartra.
                    </p>
                </div>
                <div className="baget__content--body">
                    <p>
                    Veremos al detalle qué experimentos científicos se realizaron durante la misión Apollo 15.
                    </p>
                </div>
                <div className="baget__content--footer">
                    <div className="content--footer-info">
                        <p>
                            Jueves 8 julio - 23:00 CET
                        </p>
                    </div>
                    <div className="content--footer-btn1">
                        <p>
                            Agendar
                        </p>
                    </div>
                    <div className="content--footer-btn2">
                        <p>
                            Ver Directo
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Baget;
