import React from 'react'
import Baget from './Baget';
import Btn from './Btn';

import {bagetData} from '../api/BagetData'
import {images} from '../assets/img'

function Bagets() {
    return (
        <div className="container section__baget">
            <h2 className="card__section--title">
            Nuestros Directos
            </h2>
            <div className="baget__container">
                <div className="baget__container--arrow">
                    <img src={images.arrow_left} alt="" />
                </div>
                
                {
                    bagetData.map(infoData =>(
                        <Baget  id={infoData.id} title={infoData.title} text={infoData.text} img={infoData.img} date={infoData.date} />
                    )

                    )
                }

                <div className="baget__container--btn-end">
                    <Btn type="big" content="Proximos directos" /> 
                </div>

            </div>
            
        </div>
    )
}

export default Bagets;
