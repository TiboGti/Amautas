import React from 'react'
import './style/card.css'


function Card(props) {

    
    const title = props.title;
    
    console.log(title);
    
    return (
        <div className="card" >
            <img src="" alt="" />
            <h2>
                {title}
            </h2>
            
        </div>
    )
}

export default Card;
