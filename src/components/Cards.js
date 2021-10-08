import React from 'react'
import './style/card.css'
import {CarData} from '../api/CarsData'
import {images} from '../assets/img'
import Card from './Card';

function Cards() {
    return (
        <div className="container">
            <h2 className="card__section--title">
                Cursos
            </h2>
            <div className="card__container">
                <div className="arrow arrow-left">
                    <img src={images.arrow_left} alt="" />
                </div>
                {
                    CarData.map(Cardinfo =>(
                        <Card key={Cardinfo.id} img={Cardinfo.img} title={Cardinfo.title} autor={Cardinfo.autor} avatar={Cardinfo.avatar} videos={Cardinfo.videos} name={Cardinfo.name} icoplay={Cardinfo.icoplay} />
                    ))
                }
                <div className="arrow arrow-left">
                    <img src={images.arrow_rigth} alt="" />
                </div>
            </div>
            <div className="card__index">
                <div className="index__content"><div className="index"></div></div>
                <div className="index__content index__active"><div className="index"></div></div>
                <div className="index__content"><div className="index"></div></div>
                <p>
                    Ver Todos
                </p>
            </div>
        </div>
    )
}

export default Cards;
