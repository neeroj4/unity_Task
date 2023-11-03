import React, { useState } from "react";
import '../styles/dashboard.css'
import electricImage from '../assets/ri_flashlight-fill.png';

function Home() {
    const images = ['Front End Rask.png', 'Porsche-Taycan 1.png', 'featured2.png'];
    const [currentSlide, setCurrentSlide] = useState(0);

    const dots = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
    return (
        <div className='home-row'>
            <div className="head-row">
                <h1 className="home-h1">Choose the best car</h1>
                <h2 className="home-h2">porsche mission e</h2>
                <h3 className="home-h3"><img className="electric-img" src={electricImage} />Electric car</h3>

            </div>
            <div className="image-carousel">
                <div className="carousel-container">
                    <img onClick={prevSlide}
                        style={{ filter: currentSlide === 0 ? 'brightness(50%) saturate(100%) hue-rotate(0deg) contrast(100%) grayscale(0%)' : '' }}
                        src={require(`../assets/Left_Arrow.png`)}
                        className="prev-img"
                    />
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={require(`../assets/${image}`)}
                            alt={`Slide ${index}`}
                            className={`carousel-image ${index === currentSlide ? "slide-in" : "slide-out"}`}
                        />
                    ))}
                    <img onClick={nextSlide}
                        style={{ filter: currentSlide === 2 ? 'brightness(50%) saturate(100%) hue-rotate(0deg) contrast(100%) grayscale(0%)' : '' }}
                        src={require(`../assets/Right_Arrow.png`)}
                        className="next-img"
                    />

                </div>
                <div className="dots-container">
                    {dots.map((dot, index) => (
                        <h2
                            key={index}
                            style={{ color: dot.id === currentSlide ? 'blue' : 'white', filter: dot.id !== currentSlide ? 'brightness(50%) saturate(100%) hue-rotate(0deg) contrast(100%) grayscale(0%)' : '' }}
                        >
                            {dot.id === currentSlide ? '●' : '●'}
                        </h2>
                    ))}
                </div>
                <div className="tem-row">
                    <div className="tem-col-1">
                        <img className="tem-img" src={require('../assets/Temp_icon.png')} />
                        <h3 className="temp-h">24°</h3>
                        <p className="temp-p">TEMPERATURE</p>
                    </div>
                    <div className="tem-col-1">
                        <p className="milage-p">km</p>
                        <h3 className="temp-h">873</h3>
                        <p className="temp-p">MILEAGE</p>
                    </div>
                    <div className="tem-col-1">
                        <img className="tem-img" src={require('../assets/Flash.png')} />
                        <h3 className="temp-h">94%</h3>
                        <p className="temp-p">BATTERY</p>
                    </div>

                </div>
                <div className="start-row">
                    <img className="start-img" src={require('../assets/Start.png')} />
                </div>
            </div>

        </div>
    )
}

export default Home;
