import React from 'react'
import {tagData} from '../api/TagData'
import Tag from './Tag';
import './style/tag.css'

function Tgas() {
    return (
        <div className="container">
            <div className="tag__container">
                {
                    tagData.map(infoTag =>(
                        <Tag title={infoTag.title} text={infoTag.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tgas;
