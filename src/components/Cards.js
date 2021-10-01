import React from 'react'
import './style/card.css'
import {CarData} from '../api/CarsData'
import Card from './Card';

function Cards() {
    return (
        <div className="container">
        <div className="card__container">
            {
                CarData.map(Cardinfo =>(
                    <Card key={Cardinfo.id} img={Cardinfo.img} title={Cardinfo.title} autor={Cardinfo.autor} avatar={Cardinfo.avatar} videos={Cardinfo.videos} name={Cardinfo.name} icoplay={Cardinfo.icoplay} />

                ))

            }
        </div>
        </div>
    )
}

export default Cards;
