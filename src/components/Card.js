import React from 'react'
import './style/card.css'


function Card(props) {

    
    
    
    return (
        <div className="card" key={props.id}>
            <img src={props.img} alt="" />
            <div className="card__text">
                <div className="card__text--title">
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div className="card__text--avatar">
                    <div className="avatar--content">
                        <img src={props.avatar} alt="" /> 
                        <p>
                            {props.name}
                        </p>
                    </div>
                    <div className="avatar--content">
                        {props.videos}
                        <img src={props.icoplay} alt="" className="icoplay"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;
