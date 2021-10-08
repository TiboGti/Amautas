import React from 'react'
import './style/tag.css'


function Tag(props) {
    return (
        <div className="tag" >
            <div className="tag__title">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="tag__body">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Tag;
