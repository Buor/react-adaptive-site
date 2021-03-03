import React from "react";
import people from "./../../Styles/Images/People.png";

export default function Main_Information() {
    return (
        <div className="information">
            <img src={people} alt="people" />
            <div className="information__info">
                <div className="information__info-title">
                    Help Finding Information Online
                </div>
                <div className="information__info-subtitle">
                    Fully customizable and neatly organized components will help
                    you work faster without limiting creative freedom.
                </div>
                <div className="information__info-row">
                    <div className="row-el">
                        <div className="row-el-title">Feature One</div>
                        <div className="row-el-desc">
                            Fully customizable and neatly organized components
                            will help you work faster
                        </div>
                    </div>
                    <div className="row-el">
                        <div className="row-el-title">Feature Two</div>
                        <div className="row-el-desc">
                            Fully customizable and neatly organized components
                            will help you work faster
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
