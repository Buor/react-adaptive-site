import React from 'react'
import card from './../../Styles/Images/card1.png'
export default function Main_Business() {
    return (
        <div className='business'>
            <div className="business__info">
                <div className="business__info-title">Invest property for better <span>business</span></div>
                <div className="business__info-desc">We are committed to processing the information in order to contact you and talk about your project. We are committed to processing the information.</div>
                <button className='business__info-btn'>Learn More</button>
            </div>
            <img src={card} alt="card"/>
        </div>
    )
}
