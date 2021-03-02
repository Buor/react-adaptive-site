import React from "react";
import video_poster from './../../Styles/Images/video-back.png';
import frame1 from './../../Styles/Images/Frame.svg'
import frame2 from './../../Styles/Images/Frame-1.svg'
import frame3 from './../../Styles/Images/Frame-2.svg'
import frame4 from './../../Styles/Images/Frame-3.svg'
import frame5 from './../../Styles/Images/Frame-4.svg'
import frame6 from './../../Styles/Images/Frame-5.svg'

export default function Head() {
    return (
        <div className="head">
            <div className="head__title">
                Many reasons to get up and start to get back in the business
            </div>
            <div className="head__desc">
            The harder you work for something, the greater you’ll feel when you achieve it.
            </div>
            <div className="head__btns">
                <button className='head__btns-learn'>Learn More</button>
                <button className='head__btns-demo'>Demo</button>
            </div>
            <div className="head__video-wrapper">
                <video poster={video_poster}></video>
                <div className="head__video-desc">
                    <div className="head__video-desc-title">The harder you work for something, the greater you’ll feel when you achieve it.</div>
                    <a className="head__video-btn">Watch preview</a>
                </div>
            </div>
            <div className="companies">
                <img src={frame1} alt="company"/>
                <img src={frame2} alt="company"/>
                <img src={frame3} alt="company"/>
                <img src={frame4} alt="company"/>
                <img src={frame5} alt="company"/>
                <img src={frame6} alt="company"/>
            </div>
        </div>
    );
}
