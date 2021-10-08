import React, { Component } from "react";
import Baget from './Baget';
import Slider from "react-slick";

import {bagetData} from '../api/BagetData'
import {images} from '../assets/img'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ ...style, display: "none",  }}
        onClick={onClick}
    />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
    />
    );
}



export default class Bagets extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="container section__baget">
            <h2 className="card__section--title">
            Nuestros Directos
            </h2>
            <div className="baget__container">
                <div className="baget__container--arrow">
                    <button className="baget--arrow" onClick={this.previous} >
                    <img src={images.arrow_left} alt="" />
                    </button>
                
                </div>

                <Slider ref={c => (this.slider = c)} {...settings}>
                    
                    {
                        bagetData.map(infoData =>(
                            <Baget  key={infoData.id} title={infoData.title} text={infoData.text} img={infoData.img} date={infoData.date} />
                            )
                            
                            )
                        }
                    
                </Slider>
                
                
                <div className="baget__container--btn-end">
                    
                    <button className="btn btn--big"  onClick={this.next}>
                    Proximos directos
                    </button>
                </div>

            </div>
            
        </div>
    )
}

}
