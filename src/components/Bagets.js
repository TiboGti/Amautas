import React from 'react'
import Baget from './Baget';
import {bagetData} from '../api/BagetData'

function Bagets() {
    return (
        <div className="container">
            <div className="baget__container">
                
                {
                    bagetData.map(infoData =>(
                        <Baget  id={infoData.id} title={infoData.title} text={infoData.text} img={infoData.img} date={infoData.date} />
                    )

                    )
                }

            </div>
            
        </div>
    )
}

export default Bagets;
