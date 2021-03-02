import React from "react";
import logo from "./../../Styles/Images/logo_small.png";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="navbar-left__nav">
                    <div className="navbar-wrapper">
                        <div className="navbar-row">
                            <div className="navbar-item">
                                <a href="/">About</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/">Gallery</a>
                            </div>
                        </div>
                        <div className="navbar-row">
                            <div className="navbar-item">
                                <a href="/">Pricing</a>
                            </div>
                            <div className="navbar-item">
                                <a href="/">FAQ</a>
                            </div>
                        </div>
                        <div className="navbar-row">
                            <div className="navbar-item">
                                <a href="/">Benefits</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="navbar-right">
                <button className="navbar-right__btn-sign-in">Sign In </button>
                <button className="navbar-right__btn-sign-up">Sign Up</button>
            </div>
        </div>
    );
}
