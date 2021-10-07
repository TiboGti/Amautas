import React from 'react'
import './style/baget.css'

function Baget(props) {
    return (
        <div className="baget" key={props.id} >
            <div className="baget__card">
                <img src={props.img} alt="" />
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
