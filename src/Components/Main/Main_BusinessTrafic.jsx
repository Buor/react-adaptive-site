import React from "react";
import image from "./../../Styles/Images/stats.png";
export default function BusinessTrafic() {
    return (
        <div className="traffic">
            <div className="traffic__info">
                <div className="traffic__info-title">
                    Increase your business <span>traffic</span>
                </div>
                <div className="traffic__info-desc">
                    We are committed to processing the information in order to
                    contact you and talk about your project.
                </div>
                <button className="traffic__info-btn">Learn more</button>
            </div>
            <img src={image} alt="stats" />
        </div>
    );
}
