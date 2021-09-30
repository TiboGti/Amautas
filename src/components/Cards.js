import React from 'react'
import {CarData} from '../api/CarsData'
import Card from './Card';

function Cards() {
    return (
        <div className="card__contianer">
            {
                CarData.map(Cardinfo =>(
                    <Card key={Cardinfo.id} img={Cardinfo.img} title={Cardinfo.title} autor={Cardinfo.autor} avatar={Cardinfo.avatar} video={Cardinfo.video} />

                ))

            }
        </div>
    )
}

export default Cards;
