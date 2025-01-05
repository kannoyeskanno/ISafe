import React, { useState, useEffect } from 'react';
import forestFireImage from '../images/fire.png';
import floodsImage from '../images/flood.png';
import electricalImage from '../images/elect.png';
import manmadeImage from '../images/manmade.png';
import './Carousel.css';

const Carousel = () => {
    const carouselCards = [
        { 
            title: 'Forest Fire', 
            description: 'A catastrophic event involving fire that poses significant risks to life and property', 
            background: '#DF4040', 
            textColor: 'white', 
            image: forestFireImage 
        },
        { 
            title: 'Floods', 
            description: 'Flooding is a temporary overflow of water onto land that is normally dry.', 
            background: '#3362D9', 
            textColor: 'white', 
            image: floodsImage 
        },
        { 
            title: 'Electrical', 
            description: 'An undesired event caused by electric current.', 
            background: '#D7E901', 
            textColor: 'black', 
            image: electricalImage 
        },
        { 
            title: 'Man-made', 
            description: 'Involving a failure of a man-made system.', 
            background: '#b89470', 
            textColor: 'white', 
            image: manmadeImage
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselCards.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, [carouselCards.length]);

    return (
        <div 
            className="carousel"
            style={{ 
                backgroundColor: carouselCards[currentIndex].background, 
                color: carouselCards[currentIndex].textColor
            }}
        >
            <div className="carousel-item">
                <div className='carousel-border'>
                    <div className="carousel-caption">
                        <h2>{carouselCards[currentIndex].title}</h2>
                        <p className='carousel-desc'>{carouselCards[currentIndex].description}</p>
                    </div>
                    <img src={carouselCards[currentIndex].image} alt={carouselCards[currentIndex].title} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
