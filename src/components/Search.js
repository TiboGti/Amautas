import React from 'react'
import './style/search.css'
import {images} from '../assets/img'

function Search() {
    return (
        <div className="search">
            <input type="text" />
            <img src={images.search} alt="search icono" />
        </div>
    )
}

export default Search;
