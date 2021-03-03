import React from "react";
import video_poster from './../../Styles/Images/video-back.png';


export default function Main_Head() {
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
        </div>
    );
}
