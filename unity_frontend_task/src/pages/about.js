import React, { useState } from "react";
import '../styles/dashboard.css'


function About() {

    return (
        <div className='about-col'>
            <div className='about-row'>
            <ul className="about-h-ul">
                <li className="h-li"><img className="h-img" src={require('../assets/logo.png')} />Elecar</li>
                <li className="h-d-li">We offer the best electric cars of<br />
                    the most recognized brands in<br />
                    the world.</li>

            </ul>
            <ul className="about-ul">
                <li className="about-li-h"><h3>Company</h3></li>
                <li className="about-li">About</li>
                <li className="about-li">Cars</li>
                <li className="about-li">History</li>
                <li className="about-li">Shop</li>
            </ul>
            <ul className="about-ul">
                <li className="about-li-h"><h3>Information</h3></li>
                <li className="about-li">Request a quote</li>
                <li className="about-li">find a dealer</li>
                <li className="about-li">contact us</li>
                <li className="about-li">services</li>
            </ul>
            <ul className="about-ul-icon">
                <li className="about-li-h"><h3>follow us</h3></li>
                <ul className="about-ul-row">
                    <li className="about-li"><img src={require('../assets/ri_facebook-fill.png')} /></li>
                    <li className="about-li"><img src={require('../assets/ri_instagram-line.png')} /></li>
                    <li className="about-li"><img src={require('../assets/ri_twitter-line.png')} /></li>
                </ul>
            </ul>
            </div>
            <div>
                <p className="col-p">Bedimcode. All rights reserved</p>
            </div>


        </div>
    )
}

export default About;
