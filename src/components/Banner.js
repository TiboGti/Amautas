import React from 'react'
import Btn from './Btn';
import './style/banner.css'

function Banner(props) {
    return (
        <div className="container">
            <div className="banner">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.text}
                </p>

                <Btn type={props.type} content={props.content} />
            </div>
        </div>
    )
}

export default Banner;
